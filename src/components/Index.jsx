import React from 'react'
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
                        <h2 className="carousel-caption-title">Centro cultural japonés</h2>
                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                        <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                    </div>
                </div>
                <div className="container">
                    <div className="carousel-caption-off">
                        <h2 className="section-title">Centro cultural japonés</h2>
                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                        <p><a className="btn btn-md btn-primary" href="/">Learn more</a></p>
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
