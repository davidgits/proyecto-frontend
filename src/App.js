import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// estilos
import "./App.css";
// componentes
import Navbar from "./components/Navbar";
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from "./components/Dashboard";
import Index from "./components/Index";
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

// PROTEGEMOS LAS RUTAS:
const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
        return true;
    } else {
        return false;
    }
};
// ruta privada
const MyRoute = (props) => {
    // si tiene token muestra la ruta con las props, si no redirige al login
    return isAuthenticated() ? <Route {...props} /> : <Redirect to="/" />;
};
// ruta pública
const PublicRoute = (props) => {
    // si tiene token redirecciona a pantalla de dashboard, si no redirige al index
    return isAuthenticated() ? <Redirect to="/dashboard" /> : <Route {...props} />;
};

function App() {
    return (
            <Router>
                <Navbar />
                <PublicRoute path="/" exact component={Index}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact} />
                <MyRoute path="/dashboard" component={Dashboard} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Footer/>
            </Router>
    );
}

export default App;
