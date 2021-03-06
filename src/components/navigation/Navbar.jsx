import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// cookies
import { useCookies } from 'react-cookie'
// react-icons
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

// css
import "./navbar.css"

export default function Navbar() {

    const [cookies, setCookie, removeCookie] = useCookies(["user", "token"]);

    // ver si el usuario está logueado:
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        // si existe el token en la sesión, está logueado
        if (sessionStorage.getItem('token')) {
            setMenu(true)
        }

    }, [])

    // borra los datos de sesión
    const logout = () => {
        sessionStorage.clear()
        removeCookie("user")
        removeCookie("token")
        window.location.href = '/'
        console.log("session storage & cookies successfully removed!");
    }

    // cierra automáticamente el menú desplegable en pantallas pequeñas al hacer click en enlace
    // TODO revisar código de cambio de estado
    // const [isCollapsed, setCollapsed] = useState(true)

    return (
        <>
            {/* TOP NAVBAR START */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light navtop p-0">
                <ul className="navbar-nav ms-auto me-4 ">
                    <li className="nav-item me-3 my-auto">
                        TEL: (01) 436 8888
                    </li>
                    <li className="nav-item me-5 my-auto mailto">
                        <FaEnvelope /><a href="mailto:zenshindojo@gmail.com?subject=Mail from our Website"> zenshindojo@gmail.com</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.facebook.com/zenshindojosevilla" target="true">
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaFacebook /></IconContext.Provider>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.facebook.com/zenshindojosevilla" target="true">
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaTwitter /></IconContext.Provider>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.instagram.com/isshindojo" target="true">
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaInstagram /></IconContext.Provider>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.instagram.com/isshindojo" target="true">
                            <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaYoutube /></IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* TOP-NAVBAR END */}

            {/* NAVBAR START */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light pt-0">
                <div className="container-fluid">
                    {/* LOGO START */}
                    <Link className="navbar-brand fs-2 ms-3" to="/">
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '2em', color: '#e9b1cd' } }}>
                            <GiTwirlyFlower />
                        </IconContext.Provider>
                        <span className="fw-bold">&nbsp; zenshin</span>dojo
                    </Link>
                    {/* LOGO END */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <button className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isCollapsed ? "false" : "true"} aria-label="Toggle navigation"> */}
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* {isCollapsed?collapse navbar-collapse show : collapse navbar-collapse} */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        {/* <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNavDropdown"> */}
                        {/* usuario logueado: el menú varía si está logueado o no */}
                        {!menu ?
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" exact activeClassName="selected" aria-current="page" to="/">Inicio</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    {/* <NavLink className="nav-link" activeClassName="active" to="/about" onClick={() => setCollapsed(!isCollapsed)}>El Dojo</NavLink> */}
                                    <NavLink className="nav-link" activeClassName="selected" to="/about">El Dojo</NavLink>
                                </li>
                                <li className="nav-item dropdown mx-2">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Actividades
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="/">Aikido</Link></li>
                                        <li><Link className="dropdown-item" to="/">Karate-do</Link></li>
                                        <li><Link className="dropdown-item" to="/">Meditación Zen</Link></li>
                                        <li><Link className="dropdown-item" to="/">Yoga</Link></li>
                                        <li><Link className="dropdown-item" to="/">Tai-Chi</Link></li>
                                        <li><Link className="dropdown-item" to="/">Idioma Japonés</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" activeClassName="selected" to="/timetables">Horarios</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" activeClassName="selected" to="/workshop">Cursos</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" activeClassName="selected" to="/gallery">Galería</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" activeClassName="selected" to="/contact">Contacto</NavLink>
                                </li>
                            </ul> :
                            <ul className="navbar-nav mx-auto"><li className="nav-item mx-2"><NavLink className="nav-link" to="/dashboard">Área Privada</NavLink></li></ul>}
                        {menu ?
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" aria-current="page" to="/dashboard">Bienvenido {sessionStorage.getItem('name')}</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/" onClick={() => logout()}>Salir</Link>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav">
                                <li className="nav-item mx-2">
                                    <Link className="nav-link" to="/login">Acceder</Link>
                                </li>
                                <li className="nav-item mx-2 register">
                                    <Link className="nav-link" to="/signup">Registrar</Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
            {/* NAVBAR END */}
        </>
    )
}
