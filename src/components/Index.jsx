import React from 'react'
import "./index.css"
import Welcome from './Welcome'
import Cards from './Cards'

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
                        <h1>Centro cultural japonés</h1>
                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                        <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                    </div>
                </div>
                <div className="container">
                    <div className="carousel-caption-off">
                        <h1>Centro cultural japonés</h1>
                        <p>Some representative placeholder content for the second slide of the carousel.</p>
                        <p><a className="btn btn-md btn-primary" href="/">Learn more</a></p>
                        <hr />
                    </div>
                </div>
            </div>
            {/* bienvenida */}
            <Welcome/>
            {/* actividades */}
            <h1 className="text-center">Nuestras disciplinas</h1>
            <Cards />
        </>
    )
}
