import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from "react-icons"
import { GiTwirlyFlower } from 'react-icons/gi'
import "./welcome.css"

export default function Welcome() {
    return (
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
                            <span>“Lorem ipsum dolor sit amet consectetur adipisicing.”</span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quos nihil, doloremque, ducimus alias earum quam velit cum veniam repudiandae sapiente quaerat eveniet laboriosam excepturi tempora quo dolorem sint voluptates porro beatae quisquam blanditiis officia unde repellendus. Deserunt, tempore minus?</p>
                            <p className="para-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur similique accusamus esse libero nesciunt tenetur molestiae in iure! Deleniti tenetur necessitatibus vel. Aut dolores suscipit animi nobis facere laboriosam nostrum doloremque fugiat ab quisquam! Dicta deleniti fuga cupiditate optio. Eligendi necessitatibus numquam voluptates! Dolores, a.</p>
                            <Link to="/timetables" className="btn btn-primary">Horario Clases</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
