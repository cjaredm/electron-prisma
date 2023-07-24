import { createRoot } from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ContextFunnel } from './contexts';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Create an Apollo Client instance
const client = new ApolloClient({
  link: new HttpLink({
    // @ts-ignore
    uri: `http://localhost:5432/graphql`,
    credentials: 'include'
  }),
  credentials: 'include',
  cache: new InMemoryCache()
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ContextFunnel>
        <App />
      </ContextFunnel>
    </ApolloProvider>
  </BrowserRouter>
);

// calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', arg => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });
// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
