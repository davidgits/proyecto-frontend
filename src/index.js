import React from "react";
import ReactDOM from "react-dom";
// cookies
import { CookiesProvider } from "react-cookie";
import App from "./App";
// peticiones http
import axios from "axios"; 

// generalizamos la url del backend
axios.defaults.baseURL = process.env.REACT_APP_API_STUDENTS_URL;

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
