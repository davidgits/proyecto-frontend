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

// OBTENEMOS COOKIE CON JS
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
// console.log(getCookie("token"));

// PROTEGEMOS LAS RUTAS:
const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    const tokenCookie = getCookie("token");
    const userCookie = getCookie("user")
    if (token) {
        return true;
    } else if (tokenCookie !== "") {
        sessionStorage.setItem("token", tokenCookie);
        sessionStorage.setItem("name", userCookie);
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
