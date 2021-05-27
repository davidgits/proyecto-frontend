import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios"; // peticiones http

// generalizamos la url del backend
axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

