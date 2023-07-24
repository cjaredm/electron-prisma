import { app, BrowserWindow, shell } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'express-flash';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from './prisma/generated/client';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import getResolvers from './gql/resolvers';
import typeDefs from './gql/schema';
import seedDb from './seedData';

async function startServer() {
  const prisma = new PrismaClient();

  const expressApp = express();
  expressApp.locals.app = expressApp;
  expressApp.use(
    cors({
      origin: 'http://localhost:1212',
      credentials: true
    })
  );

  expressApp.use(
    expressSession({
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 12 * 60 * 60 * 1000 // ms
      },
      secret: 'RA$WunXchargeShoe',
      resave: false,
      saveUninitialized: false,
      store: new PrismaSessionStore(prisma, {
        checkPeriod: 1000, // 2 * 60 * 1000, // ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined
      })
    })
  );

  expressApp.use(flash());
  expressApp.use(cookieParser());
  expressApp.use(bodyParser.json());

  const resolvers = await getResolvers();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, ...context }) => ({
      req,
      prisma,
      expressApp,
      app: expressApp,
      ...context,
      ...req.app.locals.context
    })
  });

  // @ts-ignore
  const authenticateMiddleware = (req, res, next) => {
    console.log('Authenticating user...');

    const now = new Date();
    const expireDate = new Date(req.session?.cookie?.expires);
    const isExpired = expireDate.getTime() < now.getTime();

    if (req.path === '/graphql' && req.body.operationName === 'Login') {
      console.log('Login request, skipping authentication');
      next();
    } else if (req?.session?.user?.id && !isExpired) {
      // User is authenticated, allow the request to proceed
      console.log('User is authenticated');
      next();
    } else {
      // User is not authenticated, send an error response
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  // Apply the authentication middleware to the protected routes
  expressApp.use(authenticateMiddleware);

  await server
    .start()
    .then(() => console.log('Apollo Server started!'))
    .catch(e => {
      console.error(e);
      process.exit(1);
    });

  await server.applyMiddleware({ app: expressApp, cors: false });
  console.log('Express Server started!');

  await expressApp.listen({ port: process.env.DB_PORT }, async () => {
    console.log(`Listening on port ${process.env.DB_PORT}!`);

    // eslint-disable-next-line no-undef
    await seedDb(prisma)
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  });

  await seedDb(prisma)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async e => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

  class AppUpdater {
    constructor() {
      log.transports.file.level = 'info';
      autoUpdater.logger = log;
      autoUpdater.checkForUpdatesAndNotify();
    }
  }

  let mainWindow: BrowserWindow | null = null;

  if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = await import('source-map-support');
    sourceMapSupport.install();
  }

  const isDebug = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

  if (isDebug) {
    require('electron-debug')();
  }

  const installExtensions = async () => {
    const installer = await import('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS'];

    return installer
      .default(
        // @ts-ignore
        extensions.map(name => installer[name]),
        forceDownload
      )
      .catch(console.log);
  };

  const createWindow = async () => {
    if (isDebug) {
      await installExtensions();
    }

    const RESOURCES_PATH = app.isPackaged
      ? path.join(process.resourcesPath, 'assets')
      : path.join(__dirname, '../../assets');

    const getAssetPath = (...paths: string[]): string => {
      return path.join(RESOURCES_PATH, ...paths);
    };

    mainWindow = new BrowserWindow({
      // https://zeke.github.io/electron.atom.io/docs/api/browser-window/#new-browserwindowoptions
      title: 'Runway Fashion Exchange',
      show: true,
      // fullscreen: true,
      width: 800,
      height: 600,
      icon: getAssetPath('icon.png'), // TODO: get Runway Icon
      webPreferences: {
        preload: app.isPackaged
          ? path.join(__dirname, 'preload.js')
          : path.join(__dirname, '../../.erb/dll/preload.js'),
        defaultFontFamily: {
          standard: 'Roboto',
          serif: 'Roboto Slab',
          sansSerif: 'Roboto',
          monospace: 'Roboto Mono'
        },
        minimumFontSize: 12,
        defaultFontSize: 16
        // devTools: false // Disable DevTools
      }
    });

    mainWindow.loadURL(resolveHtmlPath('index.html'));

    mainWindow.on('ready-to-show', () => {
      if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      if (process.env.START_MINIMIZED) {
        mainWindow.minimize();
      } else {
        mainWindow.show();
        // mainWindow.maximize();
      }
    });

    mainWindow.on('closed', () => {
      mainWindow = null;
    });

    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();

    // Open urls in the user's browser
    mainWindow.webContents.setWindowOpenHandler(edata => {
      shell.openExternal(edata.url);
      return { action: 'deny' };
    });

    new AppUpdater();
  };

  app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app
    .whenReady()
    .then(async () => {
      await createWindow();
      app.on('activate', () => {
        // On macOS, it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) createWindow();
      });
    })
    .catch(console.log);
}

startServer()
  .then(() => console.log('Server started!'))
  .catch(console.error);
