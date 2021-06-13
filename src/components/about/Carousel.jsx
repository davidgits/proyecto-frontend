import React, { Component } from 'react'
// react-icons
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
// owl-carousel
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// estilos
import './carousel.css'

export default class Carousel extends Component {
    render() {
        return (
                <OwlCarousel items={3}
                    className="team__slider owl-carousel"
                    loop
                    nav
                    dots
                    smartSpeed={1200}
                    autoplay={true}
                    responsive={{
                        320: {
                            items: 1
                        },
                        768: {
                            items: 2
                        }}
                    }
                    margin={0} >
                    <div className="col-lg-6">
                        <div className="team__item">
                            <div className="team__item__pic">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/about/team-1.png`} alt="" />
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
                            <div className="team__item__pic aiki">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/aiki_sensei.png`} alt="" />
                            </div>
                            <div className="team__item__text">
                                <div className="team__item__title">
                                    <h4>Manuel González sensei</h4>
                                    <span>Aikido & Zen Teacher</span>
                                </div>
                                <p>6th Dan of<br /> Aikido Aikikai Tokio</p>
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
                            <div className="team__item__pic w-75">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/karate_sensei.png`} alt="" />
                            </div>
                            <div className="team__item__text">
                                <div className="team__item__title">
                                    <h4>Joe Sturman sensei</h4>
                                    <span>Karate & Jiu-Jitsu Teacher</span>
                                </div>
                                <p>5th Dan of<br /> Shotokai Karate-do</p>
                                <div className="team__item__social">
                                    <a href="https://www.facebook.com/zenshindojosevilla"><FaFacebook /></a>
                                    <a href="https://www.facebook.com/zenshindojosevilla"><FaTwitter /></a>
                                    <a href="https://www.instagram.com/isshindojo"><FaInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
        )
    }
}

