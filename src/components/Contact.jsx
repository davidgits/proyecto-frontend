import React from 'react'
import ContactForm from './ContactForm'
import Map from './Map'
// images
import ImageHeader from '../assets/img/contact.jpg'
// css
import "./contact.css"

export default function Contact() {
    return (
        <>
            <img src={ImageHeader} className="w-100" alt="" />
            {/* header */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-white">Localización y Contacto</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
            {/* formulario de contacto */}
            <ContactForm />
            {/* mapa */}
            <Map />

        </>
    )
}