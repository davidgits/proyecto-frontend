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
    const [alumnos, setAlumnos] = useState([])

    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nif, setNif] = useState('')
    const [fecha_nacim, setFnacim] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fecha_alta, setFalta] = useState('')
    const [tactividad, setTactividad] = useState([])
    const [actividadselect, setActividadSelect] = useState('')

    // hook que carga el componente
    useEffect(() => {
        getAlumnos()
        // setTactividad(['Aikido', 'Karate', 'Meditación']) // se recorre para mostrar al cliente
        // setActividadSelect('aikido') // valor por defecto
    }, [])

    // listar alumnos
    const getAlumnos = async () => {
        // const id = sessionStorage.getItem('userId')
        const token = sessionStorage.getItem('token')
        const headers = {
            headers: { 'x-access-token': token }
        }

        await axios.get('/api/students', headers)
            .then((response) => {
                console.log(response.data);
                setAlumnos(response.data); // guarda en el estado
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

    // eliminar alumnos
    const eliminar = async (id) => {
        const token = sessionStorage.getItem('token')
        const response = await axios.delete('/api/students' + id,
            {
                headers: { 'token': token },
            })
        const message = response.data.message
        Swal.fire({
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1500
        })
        getAlumnos()
    }

    // guardar alumno
    const guardar = async (e) => {
        e.preventDefault();
        const alumno = {
            nombre,
            apellidos,
            nif,
            fecha_nacim,
            telefono,
            direccion,
            fecha_alta,
            tactividad: actividadselect
        }
        const token = sessionStorage.getItem('token')
        const response = await axios.post('/api/students', alumno, {
            headers: { 'token': token }
        })
        const status = response.data.status
        const message = response.data.message
        if (status !== 406) {
            Swal.fire({
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(() => {
                window.location.href = '/dashboard'
            }, 1500)
        } else {
            Swal.fire({
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    // barra de búsqueda por nombre
    const buscar = async (e) => {
        // si el cuadro de búsqueda está vacío, carga todos los alumnos
        if (e.target.value === '') {
            return getAlumnos()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const response = await axios.get('/api/students/find/' + buscar, {
            headers: { 'token': token }
        })
        setAlumnos(response.data) // agregamos al estado
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
                    {/* barra de búsqueda */}
                    <div className="col-md-6 ms-auto">
                        <input
                            type="search"
                            className="form-control me-sm-2"
                            placeholder="Buscar..."
                            name="name"
                            aria-label='Search'
                            onChange={(e) => buscar(e)}
                        />
                    </div>
                </div>
            </nav>
            {/* mostrar alumnos */}
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
                                        <th>Dirección</th>
                                        <th>Fecha Alta</th>
                                        <th className="text-center" colSpan="2">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        alumnos.map((alumno, i) => (
                                            <tr key={alumno._id}>
                                                <td>{(i + 1)}</td>
                                                <td>{alumno.name}</td>
                                                <td>{alumno.surname}</td>
                                                <td>{alumno.dni}</td>
                                                <td>{moment(alumno.birthdate).format("DD/MM/YYYY")}</td>
                                                <td>{alumno.phone}</td>
                                                <td>{alumno.address}</td>
                                                <td>{moment(alumno.enrolldate).format("DD/MM/YYYY")}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => eliminar(alumno._id)}>Eliminar</button>
                                                </td>
                                                <td>
                                                    <Link to={'/edit/' + alumno._id} className="btn btn-warning">Editar</Link>
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
            {/* MODAL */}
            <div className="modal fade" id="addAlumno">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Añadir Alumno</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={guardar}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="col-form-label">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="nombre"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="apellidos" className="col-form-label">Apellidos</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setApellidos(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nif" className="col-form-label">NIF</label>
                                    <input
                                        type="text"
                                        name="dni"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setNif(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fnacim" className="col-form-label">Fecha Nacimiento</label>
                                    <input
                                        type="date"
                                        name="birthdate"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setFnacim(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="col-form-label">Teléfono</label>
                                    <input
                                        type="phone"
                                        name="phone"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setTelefono(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="col-form-label">Dirección</label>
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setDireccion(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="falta" className="col-form-label">Fecha Alta</label>
                                    <input
                                        type="date"
                                        name="enrolldate"
                                        className="form-control"
                                        required
                                        onChange={
                                            (e) => setFalta(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="actividad" className="col-form-label">Actividad</label>
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

