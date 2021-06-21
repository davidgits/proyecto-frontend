import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
// estilos
import './about.css'
// react-icons
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'


export default function About() {
    return (
        <section className="about">
            {/* breadcrub */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">El Dojo</li>
                </ol>
            </nav>
            {/* header image */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/dojo.jpg`} className="w-100" alt="header_dojo_image" />
            {/* header text */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold">El Dojo</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto libero unde quidem qui aut ullam cumque quisquam vitae, nam dicta quo? Magnam at voluptatem aut illo unde dolorem cumque mollitia in eius, recusandae repudiandae.</p>
                    </div>
                </div>
            </div>

            {/* services */}
            <div className="about__services p-5">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/about/af-1.png`} alt="" />
                            <h5>Mejora tu autoestima</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos esse nulla quisquam commodi eum!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/about/af-4.png`} alt="" />
                            <h5>Ponte en forma!</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque vel tempora ullam dolorum veniam? Delectus, voluptates.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/about/af-2.png`} alt="" />
                            <h5>Encuentra el equilibrio</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti officia magni tempore vero autem temporibus quaerat aliquam.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/about/af-3.png`} alt="" />
                            <h5>Para todas las edades</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro nihil labore ipsa ratione. Explicabo, corrupti minima?</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* about */}
            <div className="row mx-0">
                <div className="col-lg-7 d-flex justify-content-around">
                    <div className="about__pic p-0">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/about/about.png`} alt="" />
                    </div>
                </div>
                <div className="col-lg-5 p-3">
                    <div className="about__text">
                        <div className="section-title">
                            <IconContext.Provider value={{ className: 'logo-icon', style: { verticalAlign: 'middle', fontSize: '4em' } }}>
                                <GiTwirlyFlower />
                            </IconContext.Provider>
                            <h2>Grupos y Niveles</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa sint ipsam autem reprehenderit nam saepe consectetur molestias. Culpa, vel eaque.</p>
                        </div>
                        <div className="about__bar">
                            <div className="about__bar__item">
                                <h3>Tai-Chi (adultos - sábados) <span className="badge bg-secondary">New</span></h3>
                            </div>
                            <div className="about__bar__item">
                                <h3>Aikido (niños y adultos - tarde)</h3>
                            </div>
                            <div className="about__bar__item">
                                <h3>Karate-do (niños y adultos - tarde)</h3>
                            </div>
                            <div className="about__bar__item">
                                <h3>Yoga (adultos - mañana y tarde)</h3>
                            </div>
                            <div className="about__bar__item">
                                <h3>Meditación Zen (consultar) <span className="badge bg-secondary">New</span></h3>
                            </div>
                            <div className="about__bar__item">
                                <h3>Idioma Japonés (grupos reducidos - tarde) <span className="badge bg-secondary">New</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team Section Begin */}
            <section className="team spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <IconContext.Provider value={{ className: 'logo-icon', style: { verticalAlign: 'middle', fontSize: '4em' } }}>
                                    <GiTwirlyFlower />
                                </IconContext.Provider>
                                <h2>Nuestros Instructores</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum accusamus possimus doloremque veritatis odit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 pt-3">
                        <Carousel />
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </section>
    )
}
