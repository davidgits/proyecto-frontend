import React, {useState, useEffect} from 'react'
import axios from 'axios'
// alertas
import Swal from 'sweetalert2'

export default function NewStudent() {

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
        setTactivity(['Aikido', 'Karate', 'Meditación']) // se recorre para mostrar al cliente
        setActivitySelect('aikido') // valor por defecto
    }, [])

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

        await axios.post(`${process.env.REACT_APP_STUDENTS_API_URL}/api/students`, student, headers)

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

    return (
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
    )
}
