import React from 'react'
// styles
import './about.css'
// img
import ImageHeader from '../assets/img/dojo.jpg'
import Icon_1 from '../assets/img/about/af-1.png'
import Icon_2 from '../assets/img/about/af-2.png'
import Icon_3 from '../assets/img/about/af-3.png'
import Icon_4 from '../assets/img/about/af-4.png'
import About_img from '../assets/img/about/about.png'
import Team_1_img from '../assets/img/about/team-1.png'
import Team_2_img from '../assets/img/about/team-2.png'
// icon
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'



export default function About() {
    return (
        <section className="about">
            {/* header image */}
            <img src={ImageHeader} className="w-100" alt="header_dojo_image" />
            {/* header text */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold">El Dojo</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
            {/* services */}
            <div className="about__services p-5">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={Icon_1} alt="" />
                            <h5>Full Rejuvenation</h5>
                            <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={Icon_2} alt="" />
                            <h5>Extention Of Spring</h5>
                            <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                                india!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={Icon_3} alt="" />
                            <h5>Against Aging</h5>
                            <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience
                                india!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="services__item">
                            <img src={Icon_4} alt="" />
                            <h5>Slim Body</h5>
                            <p>Grab the opportunity to deepen your own yoga practice, relax, restore and experience india!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* about */}
            <div className="row mx-0">
                <div className="col-lg-7 d-flex justify-content-around">
                    <div className="about__pic p-0">
                        <img src={About_img} alt="" />
                    </div>
                </div>
                <div className="col-lg-5 p-3">
                    <div className="about__text">
                        <div className="section-title">
                            <IconContext.Provider value={{ className: 'logo-icon', style: { verticalAlign: 'middle', fontSize: '4em' } }}>
                                <GiTwirlyFlower />
                            </IconContext.Provider>
                            <h2>What We Do</h2>
                            <p>To be invited to the nearest Cali center and get free physical advice to learn more about
                                the program.</p>
                        </div>
                        <div className="about__bar">
                            <div className="about__bar__item">
                                <p>Breathing</p>
                            </div>
                            <div className="about__bar__item">
                                <p>Methabolism</p>
                            </div>
                            <div className="about__bar__item">
                                <p>Flexibility</p>
                            </div>
                            <div className="about__bar__item">
                                <p>Strongness</p>
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
                                <h2>Meet Our Team</h2>
                                <p>We search the entire world to provide you with passionate, authentic Indian Yoga</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="team__slider owl-carousel">
                            <div className="col-lg-6">
                                <div className="team__item">
                                    <div className="team__item__pic">
                                        <img src={Team_1_img} alt="" />
                                    </div>
                                    <div className="team__item__text">
                                        <div className="team__item__title">
                                            <h4>Christina Lauren</h4>
                                            <span>Yoga Teacher</span>
                                        </div>
                                        <p>Yoga & Therapy Certificate of<br /> Uttarakhand University Sanskirt</p>
                                        <div className="team__item__social">
                                            <a href="https://www.facebook.com/zenshindojosevilla"><FaFacebook /></a>
                                            <a href="https://www.facebook.com/zenshindojosevilla"><FaTwitter /></a>
                                            <a href="https://www.instagram.com/isshindojo"><FaInstagram /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team__item">
                                    <div className="team__item__pic">
                                        <img src={Team_2_img} alt="" />
                                    </div>
                                    <div className="team__item__text">
                                        <div className="team__item__title">
                                            <h4>Tracy Maclaren</h4>
                                            <span>Yoga Teacher</span>
                                        </div>
                                        <p>Yoga & Therapy Certificate of<br /> Uttarakhand University Sanskirt</p>
                                        <div className="team__item__social">
                                            <a href="https://www.facebook.com/zenshindojosevilla"><FaFacebook /></a>
                                            <a href="https://www.facebook.com/zenshindojosevilla"><FaTwitter /></a>
                                            <a href="https://www.instagram.com/isshindojo"><FaInstagram /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team__item">
                                    <div className="team__item__pic">
                                        <img src={Team_1_img} alt="" />
                                    </div>
                                    <div className="team__item__text">
                                        <div className="team__item__title">
                                            <h4>Tracy Maclaren</h4>
                                            <span>Yoga Teacher</span>
                                        </div>
                                        <p>Yoga & Therapy Certificate of<br /> Uttarakhand University Sanskirt</p>
                                        <div className="team__item__social">
                                            <a href="https://www.facebook.com/zenshindojosevilla"><FaFacebook /></a>
                                            <a href="https://www.facebook.com/zenshindojosevilla"><FaTwitter /></a>
                                            <a href="https://www.instagram.com/isshindojo"><FaInstagram /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </section>
    )
}
