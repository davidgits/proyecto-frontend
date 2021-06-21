import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import Welcome from './Welcome'
import Cards from './Cards'
import Courses from './Courses'

export default function Index() {

    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/loto.jpg`} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/seiza.jpg`} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/aiki1.jpg`} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <div className="container">
                    <div className="carousel-caption">
                        <h2 className="carousel-caption-title">Zenshin Dojo</h2>
                        <h3>Escuela de Artes Marciales y Centro Cultural Japonés</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.</p>
                        <p><Link className="btn btn-lg btn-primary" to="/about">Saber más</Link></p>
                    </div>
                </div>
                <div className="container">
                    <div className="carousel-caption-off">
                        <h2 className="carousel-caption-title">Zenshin Dojo</h2>
                        <h3>Escuela de Artes Marciales y Centro Cultural Japonés</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores.</p>
                        <p><Link className="btn btn-md btn-primary" to="/about">Saber más</Link></p>
                        <hr />
                    </div>
                </div>
            </div>
            {/* bienvenida */}
            <Welcome/>
            {/* actividades */}
            <Cards />
            {/* cursos */}
            <Courses />

        </>
    )
}
