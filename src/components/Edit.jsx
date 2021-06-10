import React, { useState, useEffect } from 'react'
import axios from 'axios'
// alerts
import Swal from 'sweetalert2'
// styles
import './edit.css'

export default function Edit(props) {

    const [name, setNombre] = useState('')
    const [surname, setApellidos] = useState('')
    const [dni, setNif] = useState('')
    const [birthdate, setFnacim] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setTelefono] = useState('')
    const [address, setDireccion] = useState('')
    const [enrolldate, setFalta] = useState('')
    const [tactividad, setTactividad] = useState([])
    const [actividadselect, setActividadSelect] = useState('')

    useEffect(() => {
        getStudent()
        setTactividad(['Aikido', 'Karate', 'Meditación'])
        setActividadSelect('aikido')
    }, [])

    const getStudent = async () => {
        const id = props.match.params.id // recoge el id que se pasa en la ruta por parámetro
        const token = sessionStorage.getItem('token')
        const headers = {
            headers: { 'x-access-token': token }
        }
        await axios.get('/api/students/' + id, headers)
            .then((response) => {
                console.log(response.data);
                // guarda los datos recibidos en el estado
                setNombre(response.data.name);
                setApellidos(response.data.surname);
                setNif(response.data.dni);
                setFnacim(response.data.birthdate);
                setTelefono(response.data.phone);
                setDireccion(response.data.address);
                setEmail(response.data.email);
                setFalta(response.data.enrolldate);
                setActividadSelect(response.data.activity.name);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                if (error.response.status === 401) {
                    sessionStorage.clear(); // borramos datos de la sesión
                    alert("Sesión expirada."); // alertamos de la sesión caducada
                    window.location.href = '/login'; // redireccionamos a pantalla logueo
                }
            })
    }

    const actualizar = async (e) => {
        e.preventDefault()
        const id = props.match.params.id // recoge el id pasado por parámetro en la dirección
        const token = sessionStorage.getItem('token')
        const headers = {
            headers: { 'x-access-token': token }
        }
        const alumno = {
            name,
            surname,
            dni,
            email,
            birthdate,
            phone,
            address,
            enrolldate,
            tactividad: actividadselect
        }

        await axios.put('/api/students/' + id, alumno, headers)
            .then((response) => {
                console.log(response.data);
                const message = response.data.message
                Swal.fire({
                    icon: 'success',
                    title: message,
                    showConfirmButton: false,
                })
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 1500)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                if (error.response.status === 401) {
                    sessionStorage.clear(); // borramos datos de la sesión
                    alert("Sesión expirada."); // alertamos de la sesión caducada
                    window.location.href = '/login'; // redireccionamos a pantalla logueo
                }
            })


    }


    return (
        <section className="edit__body p-5">
            <div className="card col-md-6 mx-auto">
                <div className="card-header">
                    <h5 className="card-title">Editar Alumno: {`${name} ${surname}`}</h5>
                </div>
                <div className="card-body m-3">
                    <form onSubmit={actualizar} >
                        {/* nombre */}
                        <div className="form-group mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="nombre"
                                className="form-control"
                                placeholder={name}
                                onChange={
                                    (e) => setNombre(e.target.value)}
                            />
                        </div>
                        {/* apellidos */}
                        <div className="form-group mb-3">
                            <label htmlFor="apellidos" className="form-label">Apellidos</label>
                            <input
                                type="text"
                                name="surname"
                                className="form-control"
                                placeholder={surname}
                                onChange={
                                    (e) => setApellidos(e.target.value)}
                            />
                        </div>
                        {/* nif */}
                        <div className="form-group mb-3">
                            <label htmlFor="nif" className="form-label">NIF</label>
                            <input
                                type="text"
                                name="dni"
                                className="form-control"
                                placeholder={dni}
                                onChange={
                                    (e) => setNif(e.target.value)}
                            />
                        </div>
                        {/* fecha nacim */}
                        <div className="form-group mb-3">
                            <label htmlFor="fnacim" className="form-label">Fecha Nacimiento</label>
                            <input
                                type="date"
                                name="birthdate"
                                className="form-control"
                                placeholder={birthdate}
                                onChange={
                                    (e) => setFnacim(e.target.value)}
                            />
                        </div>
                        {/* telefono */}
                        <div className="form-group mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="phone"
                                name="phone"
                                className="form-control"
                                placeholder={phone}
                                onChange={
                                    (e) => setTelefono(e.target.value)}
                            />
                        </div>
                        {/* direccion */}
                        <div className="form-group mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                placeholder={address}
                                onChange={
                                    (e) => setDireccion(e.target.value)}
                            />
                        </div>
                        {/* email */}
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder={email}
                                onChange={
                                    (e) => setDireccion(e.target.value)}
                            />
                        </div>
                        {/* fecha alta */}
                        <div className="form-group mb-3">
                            <label htmlFor="enrolldate" className="form-label">Fecha Alta</label>
                            <input
                                type="date"
                                name="enrolldate"
                                className="form-control"
                                placeholder={enrolldate}
                                onChange={
                                    (e) => setFalta(e.target.value)}
                            />
                        </div>
                        {/* actividad */}
                        <div className="form-group mb-3">
                            <label htmlFor="actividad" className="form-label">Actividad</label>
                            <select name="actividad" className="form-select" onChange={(e) => {
                                setActividadSelect(e.target.value)
                            }}>
                                {
                                    tactividad.map(actividad => (
                                        <option key={actividad}>
                                            {actividad}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* button */}
                        <div className="card-footer">
                            <button className="btn btn-primary me-3" type="submit">Actualizar</button>
                            <a className="btn btn-md btn-primary" href="/dashboard">Cancelar</a>
                        </div>
                    </form>

                </div>
            </div>
        </section>

    )
}
