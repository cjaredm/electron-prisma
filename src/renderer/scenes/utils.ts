export default async function sendGraphQLRequest(request: { query: string; variables?: Object }) {
  return new Promise((resolve, reject) => {
    window.electron.ipcRenderer.once('graphql-response', (event, response) => {
      if (response.error) {
        reject(new Error(response.error));
      } else {
        resolve(response);
      }
    });

    window.electron.ipcRenderer.sendMessage('graphql-request', request);
  });
}
