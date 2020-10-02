import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';

function start() {
  try {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  } catch (error) {
    console.log(error);
  }
}
start();
