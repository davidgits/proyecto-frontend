import React, { useState } from 'react'
import axios from 'axios'
// icono
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'
// alertas
import Swal from 'sweetalert2'
// css
import "./contact_form.css"

export default function Contactform() {

    // definimos estados
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // función envío de mensaje
    const sendEmail = async (e) => {
        e.preventDefault()

        const emailBody = { name, email, phone, subject, message }

        await axios.post(`${process.env.REACT_APP_STUDENTS_API_URL}/api/mailer/send-email`, emailBody)
            .then((response) => {
                const message = response.data.message
                Swal.fire({
                    icon: 'success',
                    title: message,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(message);
            })
            .catch((error) => {
                if (error.response) {
                    const message = error.response.data.message
                    Swal.fire({
                        icon: 'error',
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(message);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })

    }


    return (
        <section className="contact mb-3">
            <div className="container fluid mt-3">
                <div className="contact__text">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <IconContext.Provider value={{ style: { color: '#fff', verticalAlign: 'middle', fontSize: '4em' } }}>
                                    <GiTwirlyFlower />
                                </IconContext.Provider>
                                <h2>Formulario de contacto</h2>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={sendEmail} className="contact__form">
                        <div className="row">
                            <div className="col-lg-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div className="col-lg-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Correo electrónico"
                                    required
                                />
                            </div>
                            <div className="col-lg-6">
                                <input
                                    type="phone"
                                    className="form-control"
                                    name="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Teléfono de contacto"
                                />
                            </div>
                            <div className="col-lg-6">
                                <select
                                    name="subject"
                                    className="className-select form-select mb-3"
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <option value="">Elige un asunto</option>
                                    <option value="classes">Información de clases y horarios</option>
                                    <option value="courses">Información de cursos</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>
                            <div className="col-lg-12 text-center">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    placeholder="Mensaje"
                                    onChange={(e) => setMessage(e.target.value)}
                                    required></textarea>
                                <button type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
