import React from 'react'
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'
import "./welcome.css"
// import image_welcome from '../assets/img/stones2.jpg'
// import image_welcome_2 from '../assets/img/yoga.jpg'
// import image_welcome_3 from '../assets/img/students.jpg'



export default function Welcome() {
    return (
        <>
            <section className="home-welcome">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-lg-7 p-2 pe-3">
                            <div className="row">
                                <div className="col-6"><img className="image_welcome rounded-2" src={`${process.env.PUBLIC_URL}/assets/images/stones2.jpg`} alt="" /></div>
                                <div className="col-6">
                                    <div className="row g-2">
                                        <div className="col"><img className="image_welcome_2 rounded-2" src={`${process.env.PUBLIC_URL}/assets/images/yoga.jpg`} alt="" /></div>
                                    </div>
                                    <div className="row">
                                        <div className="col gy-3"><img className="image_welcome_2 rounded-2" src={`${process.env.PUBLIC_URL}/assets/images/students.jpg`} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home__about__text">
                                <div className="section-title">
                                    <div className="d-flex">
                                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', fontSize: '4em' } }}>
                                            <GiTwirlyFlower />
                                        </IconContext.Provider>
                                        <h3 className="nihon align-self-center ms-2">前進道場 へようこそ!</h3>
                                    </div>
                                    <h2>Bienvenidos a Zenshin Dojo</h2>
                                </div>
                                <span>“What hurts today makes you stronger tomorrow.”</span>
                                <p>We are offering internationally certified 200 Hour Yoga Teacher Training in Rishikesh and 300
                                    hour yoga teacher training in Rishikesh, India - Join us to have such life-transforming
                                    experience in The world capital of Yoga in Rishikesh.</p>
                                <p className="para-2">Zogin is a great place for those who are in search of the ancient practice and
                                    true essence of yoga, meditation, health, peace and learning the art of creating a className to
                                    teach safely. We are passionate about adjustments and mainly focus on the alignment of the
                                    asanas.</p>
                                <a href="/" className="btn btn-primary">MORE ABOUT US</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
