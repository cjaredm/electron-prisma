const { notarize } = require('@electron/notarize');
const { build } = require('../../package.json');

exports.default = async function notarizeMacos(context) {
  const { electronPlatformName, appOutDir } = context;
  if (electronPlatformName !== 'darwin') {
    return;
  }

  console.log('notarizing... process.env.CI', process.env.CI);
  if (process.env.CI !== 'true') {
    console.warn('Skipping notarizing step. Packaging is not running in CI');
    return;
  }

  console.log('notarizing...', process.env.APPLE_ID, process.env.APPLE_ID_PASS);
  if (!('APPLE_ID' in process.env && 'APPLE_ID_PASS' in process.env)) {
    console.warn('Skipping notarizing step. APPLE_ID and APPLE_ID_PASS env variables must be set');
    console.warn('Notarizing with ');
    await notarize({
      appBundleId: build.appId,
      appPath: `${appOutDir}/${appName}.app`
    });

    return;
  }

  const appName = context.packager.appInfo.productFilename;

  await notarize({
    appBundleId: build.appId,
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASS
  });
};
