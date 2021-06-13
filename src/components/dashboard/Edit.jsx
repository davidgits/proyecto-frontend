import React, { useState, useEffect } from 'react'
import axios from 'axios'
// alerts
import Swal from 'sweetalert2'
// styles
import './edit.css'

export default function Edit(props) {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dni, setDni] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [enrolldate, setEnrolldate] = useState('')
    const [tactivity, setTActivity] = useState([])
    const [activityselect, setActivitySelect] = useState('')

    const token = sessionStorage.getItem('token')
    const headers = {
        headers: { 'x-access-token': token }
    }

    useEffect(() => {
        getStudent()
        setTActivity(['Aikido', 'Karate', 'Meditación'])
        setActivitySelect('aikido')
    }, [])

    const getStudent = async () => {
        const id = props.match.params.id // recoge el id del alumno que se pasa en la ruta por parámetro

        await axios.get(`${process.env.REACT_APP_STUDENTS_API_URL}/api/students` + id, headers)
            .then((response) => {
                console.log(response.data);
                // guarda los datos recibidos en el estado
                setName(response.data.name);
                setSurname(response.data.surname);
                setDni(response.data.dni);
                setBirthdate(response.data.birthdate);
                setPhone(response.data.phone);
                setAddress(response.data.address);
                setEmail(response.data.email);
                setEnrolldate(response.data.enrolldate);
                setActivitySelect(response.data.activity.name);
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

    const updateStudent = async (e) => {
        e.preventDefault()
        const id = props.match.params.id // recoge el id pasado por parámetro en la dirección

        const student = {
            name,
            surname,
            dni,
            email,
            birthdate,
            phone,
            address,
            enrolldate,
            tactivity: activityselect
        }

        await axios.put(`${process.env.REACT_APP_STUDENTS_API_URL}/api/students` + id, student, headers)
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
                    <form onSubmit={updateStudent} >
                        {/* nombre */}
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                id="nombre"
                                className="form-control"
                                placeholder={name}
                                onChange={
                                    (e) => setName(e.target.value)}
                            />
                        </div>
                        {/* apellidos */}
                        <div className="form-group mb-3">
                            <label htmlFor="surname" className="form-label">Apellidos</label>
                            <input
                                type="text"
                                name="surname"
                                className="form-control"
                                placeholder={surname}
                                onChange={
                                    (e) => setSurname(e.target.value)}
                            />
                        </div>
                        {/* dni */}
                        <div className="form-group mb-3">
                            <label htmlFor="dni" className="form-label">DNI</label>
                            <input
                                type="text"
                                name="dni"
                                className="form-control"
                                placeholder={dni}
                                onChange={
                                    (e) => setDni(e.target.value)}
                            />
                        </div>
                        {/* fecha nacim */}
                        <div className="form-group mb-3">
                            <label htmlFor="birthdate" className="form-label">Fecha Nacimiento</label>
                            <input
                                type="date"
                                name="birthdate"
                                className="form-control"
                                placeholder={birthdate}
                                onChange={
                                    (e) => setBirthdate(e.target.value)}
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
                                    (e) => setPhone(e.target.value)}
                            />
                        </div>
                        {/* direccion */}
                        <div className="form-group mb-3">
                            <label htmlFor="address" className="form-label">Dirección</label>
                            <input
                                type="text"
                                name="address"
                                className="form-control"
                                placeholder={address}
                                onChange={
                                    (e) => setAddress(e.target.value)}
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
                                    (e) => setEmail(e.target.value)}
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
                                    (e) => setEnrolldate(e.target.value)}
                            />
                        </div>
                        {/* actividad */}
                        <div className="form-group mb-3">
                            <label htmlFor="activity" className="form-label">Actividad</label>
                            <select name="activity" className="form-select" onChange={(e) => {
                                setActivitySelect(e.target.value)
                            }}>
                                {
                                    tactivity.map(activity => (
                                        <option key={activity}>
                                            {activity}
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
