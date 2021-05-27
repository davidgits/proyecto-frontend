import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// react-icons
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2 ms-3" to="/">
                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '2em' } }}>
                            <GiTwirlyFlower />
                        </IconContext.Provider>
                        <span className="fw-bold">&nbsp;zenshin</span>dojo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">Sobre nosotros</Link>
                            </li>                            
                            <li className="nav-item dropdown mx-3">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Actividades
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/">Aikido</Link></li>
                                    <li><Link className="dropdown-item" to="/">Jiu-Jitsu</Link></li>
                                    <li><Link className="dropdown-item" to="/">Meditación Zen</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/">Contacto</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mx-3">
                            <li><Link className="nav-link" to="/login">Acceder</Link></li>
                            <li><Link className="nav-link" to="/signup">Registrar</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
