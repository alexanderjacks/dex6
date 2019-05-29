import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Progressive Web App toggle

serviceWorker.unregister();
// serviceWorker.register();
