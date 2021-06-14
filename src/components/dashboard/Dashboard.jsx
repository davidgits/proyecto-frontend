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
// componentes
import NewStudent from './NewStudent'
// paginación
import Pagination from './Pagination'

export default function Dashboard() {

    // arreglo vacío porque va a tener varios datos
    const [students, setStudents] = useState([])
    const [loading] = useState(false);
    // paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [studsPerPage] = useState(5);

    // token-header
    const token = sessionStorage.getItem('token')
    const headers = {
        headers: { 'x-access-token': token }
    }

    // hook que carga el componente
    useEffect(() => {
        
        getStudents()
        // eslint-disable-next-line
    }, [])

    // PAGINACIÓN
    const indexOfLastStud = currentPage * studsPerPage
    const indexOfFirstStud = indexOfLastStud - studsPerPage
    const currentStuds = students.slice(indexOfFirstStud, indexOfLastStud)

    // CAMBIAR DE PÁGINA
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    // LISTAR ALUMNOS
    const getStudents = async () => {

        await axios.get(`${process.env.REACT_APP_STUDENTS_API_URL}/api/students`, headers)
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

        await axios.delete(`${process.env.REACT_APP_STUDENTS_API_URL}/api/students/` + id, headers)
            .then((response) => {
                console.log(response);
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

    // barra de búsqueda por nombre
    const findStudentByName = async (e) => {
        // si el cuadro de búsqueda está vacío, carga todos los alumnos
        if (e.target.value === '') {
            return getStudents()
        }
        const buscar = e.target.value
        const response = await axios.get(`${process.env.REACT_APP_STUDENTS_API_URL}/api/students/find/` + buscar, headers)
        setStudents(response.data) // agregamos al estado
    }

    return (
        <section className="row dash">
            {/* ENCABEZADO */}
            <header className="dash__header">
                <div className="col-md-6 ms-5 pt-3">
                    <h1><FaPencilAlt /> Alumnos</h1>
                </div>
            </header>
            {/* AÑADIR ALUMNO */}
            <div className="row p-3">
                <div className="col-md-4 mx-auto">
                    <Link
                        to='#'
                        className='btn btn-primary btn-block'
                        data-bs-toggle='modal'
                        data-bs-target='#addAlumno'
                    ><GoPlus /> Add Alumno</Link>
                </div>
                {/* BARRA DE BÚSQUEDA*/}
                <div className="col-md-4 mx-auto">
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
            {/* TABLA ALUMNOS */}
            <div className="row __table">
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
                                        (loading)
                                            ?
                                            <tr><td colSpan="10">Loading...</td></tr>
                                            :
                                            currentStuds.map((student, i) => (
                                                <tr key={student._id}>
                                                    <td>{(i + 1) * (currentPage)}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.surname}</td>
                                                    <td>{student.dni}</td>
                                                    <td>{moment(student.birthdate).format("DD/MM/YYYY")}</td>
                                                    <td>{student.phone}</td>
                                                    <td>{student.email}</td>
                                                    <td>{student.address}</td>
                                                    <td>{moment(student.enrolldate).format("DD/MM/YYYY")}</td>
                                                    <td className="p-0">
                                                        <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student._id)}>Eliminar</button>
                                                    </td>
                                                    <td className="p-0">
                                                        <Link to={'/edit/' + student._id} className="btn btn-warning btn-sm">Editar</Link>
                                                    </td>
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* PAGINACIÓN */}
                    <section className="pagination">
                        <Pagination studsPerPage={studsPerPage} totalStuds={students.length} paginate={paginate} />
                    </section>
                </div>
            </div>
            {/* MODAL AÑADIR ALUMNO (CREATE) */}
            <NewStudent />
        </section>
    )
}

