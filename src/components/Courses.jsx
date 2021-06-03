import React from 'react'
import "./courses.css"

export default function Courses() {
    return (
        <section className="upcoming-classes spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title normal-title">
                            <h2>Upcoming Courses</h2>
                            <p>The trainings are multi-style and you will learn and practice Hatha Vinyasa (flow)<br /> and
                                Yin Yoga.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="classes__item">
                            <div className="classes__item__pic set-bg" data-setbg="img/classNamees/classNamees-1.jpg">
                                <span>20 Jun 2019</span>
                            </div>
                            <div className="classes__item__text">
                                <p>14 Days | Start on 10th Every Month</p>
                                <h4><a href="/">100 Hour Yoga Course Rishikesh</a></h4>
                                <h6>Jordan Lawson <span>- Yoga Teacher</span></h6>
                                <a href="/" className="class-btn">JOIN NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="classes__item">
                            <div className="classes__item__pic set-bg" data-setbg="img/classNamees/classNamees-2.jpg">
                                <span>20 Jun 2019</span>
                            </div>
                            <div className="classes__item__text">
                                <p>14 Days | Start on 10th Every Month</p>
                                <h4><a href="/">200 Hour Yoga Course Rishikesh</a></h4>
                                <h6>Jordan Lawson <span>- Yoga Teacher</span></h6>
                                <a href="/" className="class-btn">JOIN NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="classes__item">
                            <div className="classes__item__pic set-bg" data-setbg="img/classNamees/classNamees-3.jpg">
                                <span>20 Jun 2019</span>
                            </div>
                            <div className="classes__item__text">
                                <p>14 Days | Start on 10th Every Month</p>
                                <h4><a href="/">300 Hour Yoga Course Rishikesh</a></h4>
                                <h6>Jordan Lawson <span>- Yoga Teacher</span></h6>
                                <a href="/" className="class-btn">JOIN NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
