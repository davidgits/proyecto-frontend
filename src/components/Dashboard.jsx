import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// react-icons
import { FaPencilAlt } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
// date format
import moment from 'moment'
// alertas
import Swal from 'sweetalert2'
// estilos
import "./dashboard.css"

export default function Dashboard() {

    // arreglo vacío porque va a tener varios datos
    const [students, setStudents] = useState([])

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [dni, setDni] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [enrolldate, setEnrolldate] = useState('')
    const [tactivity, setTactivity] = useState([])
    const [activityselect, setActivitySelect] = useState('')

    // token-header
    const token = sessionStorage.getItem('token')
    const headers = {
        headers: { 'x-access-token': token }
    }

    // hook que carga el componente
    useEffect(() => {
        getStudents()
        setTactivity(['Aikido', 'Karate', 'Meditación']) // se recorre para mostrar al cliente
        setActivitySelect('aikido') // valor por defecto
    }, [])

    // LISTAR ALUMNOS
    const getStudents = async () => {

        await axios.get('/api/students', headers)
            .then((response) => {
                // console.log(response.data);
                setStudents(response.data); // guarda en el estado
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
                } else {
                    console.log(error);
                }
            })
    }

    // ELIMINAR ALUMNOS
    const deleteStudent = async (id) => {

        await axios.delete('/api/students/' + id, headers)
            .then((response) => {
                console.log(response.data);
                const message = response.data.message
                Swal.fire({
                    icon: 'success',
                    title: message,
                    showConfirmButton: false,
                    timer: 1500
                })

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
                // si el token expiró
                if (error.response.status === 401) {
                    sessionStorage.clear(); // borramos datos de la sesión
                    alert("Sesión expirada."); // alertamos de la sesión caducada
                    window.location.href = '/login'; // redireccionamos a pantalla logueo
                }
            })
        getStudents()
    }

    // NUEVO ALUMNO
    const newStudent = async (e) => {

        e.preventDefault();
        const student = {
            name,
            surname,
            dni,
            birthdate,
            phone,
            email,
            address,
            enrolldate,
            tactivity: activityselect
        }

        await axios.post('/api/students', student, headers)

            .then((response) => {
                // const status = response.data.status
                const message = response.data.message
                Swal.fire({
                    icon: 'success',
                    title: message,
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(() => {
                    window.location.href = '/dashboard'
                }, 1500)
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
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }

    // barra de búsqueda por nombre
    const findStudentByName = async (e) => {
        // si el cuadro de búsqueda está vacío, carga todos los alumnos
        if (e.target.value === '') {
            return getStudents()
        }
        const buscar = e.target.value
        const response = await axios.get('/api/students/find/' + buscar, headers)
        setStudents(response.data) // agregamos al estado
    }

    return (
        <section className="dash mb-5">
            <header className='py-1 dash__header'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><FaPencilAlt /> Alumnos</h1>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar py-4">
                <div className="container">
                    <div className="col-md-3">
                        <div className='d-grid gap-2 p-3'>
                            <Link
                                to='#'
                                className='btn btn-primary btn-block'
                                data-bs-toggle='modal'
                                data-bs-target='#addAlumno'
                            ><GoPlus /> Add Alumno</Link>
                        </div>
                    </div>
                    {/* BARRA DE BÚSQUEDA*/}
                    <div className="col-md-6 ms-auto">
                        <input
                            type="search"
                            className="form-control me-sm-2"
                            placeholder="Buscar..."
                            name="name"
                            aria-label='Search'
                            onChange={(e) => findStudentByName(e)}
                        />
                    </div>
                </div>
            </nav>
            {/* TABLA ALUMNOS */}
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4>Alumnos de {sessionStorage.getItem('name')}</h4>
                        </div>
                        <div className="table-responsive ">
                            <table className="table align-middle table-striped">
                                <thead className='table-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Apellidos</th>
                                        <th>NIF</th>
                                        <th>Fecha Nacimiento</th>
                                        <th>Teléfono</th>
                                        <th>Email</th>
                                        <th>Dirección</th>
                                        <th>Fecha Alta</th>
                                        <th className="text-center" colSpan="2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((student, i) => (
                                            <tr key={student._id}>
                                                <td>{(i + 1)}</td>
                                                <td>{student.name}</td>
                                                <td>{student.surname}</td>
                                                <td>{student.dni}</td>
                                                <td>{moment(student.birthdate).format("DD/MM/YYYY")}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.email}</td>
                                                <td>{student.address}</td>
                                                <td>{moment(student.enrolldate).format("DD/MM/YYYY")}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => deleteStudent(student._id)}>Eliminar</button>
                                                </td>
                                                <td>
                                                    <Link to={'/edit/' + student._id} className="btn btn-warning">Editar</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL AÑADIR ALUMNO (CREATE) */}
            <div className="modal fade" id="addAlumno">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header text-white">
                            <h5 className="modal-title">Añadir Alumno</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Formulario */}
                            <form onSubmit={newStudent}>
                                {/* nombre */}
                                <div className="mb-3">
                                    <label htmlFor="name" className="col-form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="nombre"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setName(e.target.value)}
                                    />
                                </div>
                                {/* apellidos */}
                                <div className="mb-3">
                                    <label htmlFor="surname" className="col-form-label">Apellidos</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setSurname(e.target.value)}
                                    />
                                </div>
                                {/* dni */}
                                <div className="mb-3">
                                    <label htmlFor="dni" className="col-form-label">DNI</label>
                                    <input
                                        type="text"
                                        name="dni"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setDni(e.target.value)}
                                    />
                                </div>
                                {/* fecha nacimiento */}
                                <div className="mb-3">
                                    <label htmlFor="birthdate" className="col-form-label">Fecha Nacimiento</label>
                                    <input
                                        type="date"
                                        name="birthdate"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setBirthdate(e.target.value)}
                                    />
                                </div>
                                {/* teléfono */}
                                <div className="mb-3">
                                    <label htmlFor="phone" className="col-form-label">Teléfono</label>
                                    <input
                                        type="phone"
                                        name="phone"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setPhone(e.target.value)}
                                    />
                                </div>
                                {/* email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-form-label">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {/* dirección */}
                                <div className="mb-3">
                                    <label htmlFor="address" className="col-form-label">Dirección</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setAddress(e.target.value)}
                                    />
                                </div>
                                {/* fecha alta */}
                                <div className="mb-3">
                                    <label htmlFor="enrolldate" className="col-form-label">Fecha Alta</label>
                                    <input
                                        type="date"
                                        name="enrolldate"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setEnrolldate(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="activity" className="col-form-label">Actividad</label>
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
                                <div className="modal-footer">
                                    <button className="btn btn-primary" type="submit">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

