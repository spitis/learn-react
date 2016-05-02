import './styles/reset.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { createStore } from 'redux';
import app from './reducers.js';

let store = createStore(app);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app'),
);
