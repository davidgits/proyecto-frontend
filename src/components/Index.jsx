import React from 'react'
import "./Index.css"

export default function Index() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ivan_endo.jpg`} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/karate1.jpg`} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/ivan1.jpg`} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/reigei.jpg`} className="d-block w-100" alt="..." />
                </div>
                
            </div>
            {/* hero text */}
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="hero__text">
                                <span>Bienvenidos a Zenshin Dojo</span>
                                <h2>What hurts today makes you stronger tomorrow</h2>
                                <a href="/" className="btn btn-primary">Descubrir más</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
