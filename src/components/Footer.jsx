import React from 'react'
// react-icons
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaRegClock, FaTwitter, FaRegPaperPlane } from 'react-icons/fa'
// CSS
import "./footer.css"

export default function Footer() {

    return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <section className="footer__text__logo">
                                    <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.5em', color: '#fcd1d7' } }}>
                                        <GiTwirlyFlower />
                                    </IconContext.Provider>
                                    <span className="fw-bold">&nbsp;zenshin</span><span className="footer__text__dojo">dojo</span>
                                </section>
                                <ul className="p-0">
                                    <li><FaRegClock /> Lun - Vie: 7: 30am - 07: 45pm</li>
                                    <li><FaRegClock /> Sab - Dom: 8: 30am - 14: 30pm</li>
                                </ul>
                                <form action="/" className="subscribe-form">
                                    <input type="text" className="form-control" placeholder="Suscríbete a nuestro boletín de noticias" />
                                    <button type="submit"><FaRegPaperPlane /></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h5>Inspiración</h5>
                                <ul>
                                    <li><a href="/">Online Aikido</a></li>
                                    <li><a href="/">Meditation for Beginners</a></li>
                                    <li><a href="/">Online Meditation</a></li>
                                    <li><a href="/">Aikido videos</a></li>
                                    <li><a href="/">Kenjutsu kata</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h5>Sobre Nosotros</h5>
                                <ul>
                                    <li><a href="/">Nuestro Proyecto</a></li>
                                    <li><a href="/">Nuestro Objetivo</a></li>
                                    <li><a href="/">Conoce a los Instructores</a></li>
                                    <li><a href="/">Secretaría</a></li>
                                    <li><a href="/">Servicio al Alumno</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h5>Contacto</h5>
                                <ul className="footer-address">
                                    <li><FaPhone /> (01) 436 8888</li>
                                    <li><FaEnvelope /> zenshindojosevilla@gmail.com</li>
                                    <li><FaLocationArrow /> Calle Calderón de la Barca, 44 - Sevilla</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 align-self-center">
                                <div className="footer__copyright__text">
                                    <p>Copyright &copy;&nbsp;
                                        {
                                            new Date().getFullYear()
                                        } 
                                    &nbsp;Todos los derechos reservados | Zenshin Dojo Sevilla</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="footer__copyright__social">
                                    <a href="/"><IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaFacebook /></IconContext.Provider></a>
                                    <a href="/"><IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaTwitter /></IconContext.Provider></a>
                                    <a href="/"><IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '1.2em' } }}><FaInstagram /></IconContext.Provider></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
