import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootElement
);

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     ReactDOM.render(
//       <NextApp />,
//       document.getElementById('root')
//     )
//   })
// }