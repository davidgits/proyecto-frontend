import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// estilos
import "./App.css";
// componentes
import Navbar from "./components/navigation/Navbar";
import Signup from "./components/access/Signup";
import Login from "./components/access/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Edit from "./components/dashboard/Edit";
import Index from "./components/home/Index";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Workshop from "./components/workshop/Workshop";
import Timetables from "./components/timetables/Timetables";

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
    return isAuthenticated() ? <Route {...props} /> : <Redirect to="/login" />;
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
            <Switch>
                <PublicRoute path="/" exact component={Index} />
                <Route path="/about" component={About} />
                <PublicRoute path="/contact" component={Contact} />
                <MyRoute path="/dashboard" component={Dashboard} />
                <MyRoute path="/edit/:id" component={Edit} />
                <Route path="/timetables" component={Timetables} />
                <Route path="/workshop" component={Workshop} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
