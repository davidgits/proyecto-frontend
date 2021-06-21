import React from 'react'
import {Link} from 'react-router-dom'
// componentes
import ContactForm from './ContactForm'
import Map from './Map'
// estilos
import "./contact.css"

export default function Contact() {
    return (
        <section className="contact">
            {/* breadcrub */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contacto</li>
                </ol>
            </nav>
            <img src={`${process.env.PUBLIC_URL}/assets/images/contact.jpg`} className="w-100" alt="" />
            {/* header */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold">Localización y Contacto</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
            {/* formulario de contacto */}
            <ContactForm />
            <h2 className="text-center p-5">¿Dónde estamos?</h2>
            {/* mapa */}
            <Map />

        </section>
    )
}
