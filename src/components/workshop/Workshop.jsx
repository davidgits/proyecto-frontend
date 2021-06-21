import React from 'react'
import { Link } from 'react-router-dom'
import Courses from '../home/Courses'

export default function Workshop() {
    return (
        <section className="workshop">
            {/* breadcrub */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cursos</li>
                </ol>
            </nav>

            {/* header image */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/workshop.jpg`} className="w-100" alt="header_dojo_image" />
            {/* header text */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold">Cursos y Talleres</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>

            <Courses />

        </section>
    )
}
