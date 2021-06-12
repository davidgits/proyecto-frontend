import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios"; // peticiones http
import Preloader from './components/Preloader';

// generalizamos la url del backend
axios.defaults.baseURL = process.env.REACT_APP_API_STUDENTS_URL;

ReactDOM.render(
  <React.StrictMode>
    <Preloader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

