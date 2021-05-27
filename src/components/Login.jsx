import React, { useState } from 'react'
import axios from 'axios'
// alertas
import Swal from 'sweetalert2'

export default function Login() {

    // definimos estados
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = async (e) => {
        // previene el comportamiento por defecto
        e.preventDefault()
        // captura los datos
        const user = { email, password }
        // envía la petición al backend o api
        await axios.post('/api/auth/signin', user)
            .then((response) => {
                const message = response.data.message
                // guardamos datos en la session storage
                const token = response.data.token
                console.log(token);
                const username = response.data.username
                // const userId = response.data.id
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('name', username)
                // sessionStorage.setItem('userId', userId)
                // mensaje de login correcto
                Swal.fire({
                    icon: 'success',
                    title: message,
                    showConfirmButton: false,
                    timer: 1500
                })
                // al panel de usuario
                setTimeout(function () {
                    window.location.href = '/dashboard'
                }, 2000)
            })
            .catch((error) => {
                // Error
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    const message = error.response.data.message
                    Swal.fire({
                        icon: 'error',
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request and triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);

            })
    }

    return (
        <div className='container-fluid mt-3'>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="container text-center">
                        </div>
                        <div className="card-header text-center">
                            <h4>Inicio Sesión</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={signin}>
                                {/* email */}
                                <div className="form-group p-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className='form-control'
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {/* password */}
                                <div className="form-group p-3">
                                    <label htmlFor="password">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className='form-control'
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className='d-grid gap-2 p-3'>
                                    <button type="submit" className='btn btn-primary'>Aceptar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}