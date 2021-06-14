import React from 'react'
import './timetables.css'

export default function Timetables() {
    return (
        <section className="timetables">

            {/* classes Section Begin */}
            <section className="classNamees-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="classNamees__sidebar">
                                <div className="classNamees__sidebar__item classNamees__sidebar__item--info">
                                    <h4>classNamees Information</h4>
                                    <ul className="classNamees__sidebar__item__widget">
                                        <li><span className="icon_calendar"></span> Mon, Wed, Fri</li>
                                        <li><span className="icon_clock_alt"></span> 18:30 - 19:30</li>
                                    </ul>
                                    <ul className="classNamees__sidebar__item__id">
                                        <li><span className="icon_pin_alt"></span> 184 Main Collins Streets, New York</li>
                                        <li><span className="icon_id"></span> Jordan Lawson</li>
                                    </ul>
                                    <a href="/" className="sidebar-btn">JOIN NOW</a>
                                </div>
                                <div className="classNamees__sidebar__item">
                                    <h4>About Instructor</h4>
                                    <div className="classNamees__sidebar__instructor">
                                        <div className="classNamees__sidebar__instructor__pic">
                                            <img src="img/classNamees-details/classNamees-instructor.png" alt="" />
                                        </div>
                                        <div className="classNamees__sidebar__instructor__text">
                                            <div className="classNamees__sidebar__instructor__title">
                                                <h4>Tracy Maclaren</h4>
                                                <span>Yoga Teacher</span>
                                            </div>
                                            <p>Yoga & Therapy Certificate of<br /> Uttarakhand University Sanskirt</p>
                                            <div className="classNamees__sidebar__instructor__social">
                                                <a href="/"><span className="social_facebook"></span></a>
                                                <a href="/"><span className="social_twitter"></span></a>
                                                <a href="/"><span className="social_instagram"></span></a>
                                                <a href="/"><span className="social_linkedin"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="classNamees__sidebar__item">
                                    <h4>Review & Comment</h4>
                                    <div className="classNamees__sidebar__comment__list">
                                        <div className="classNamees__sidebar__comment">
                                            <div className="classNamees__sidebar__comment__pic">
                                                <img src="img/classNamees-details/comment-1.png" alt="" />
                                                <div className="classNamees__sidebar__comment__rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                            <div className="classNamees__sidebar__comment__text">
                                                <span>04 Mar 2018</span>
                                                <h6>Brandon Kelley</h6>
                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                                    adipisci velit,</p>
                                            </div>
                                        </div>
                                        <div className="classNamees__sidebar__comment">
                                            <div className="classNamees__sidebar__comment__pic">
                                                <img src="img/classNamees-details/comment-2.png" alt="" />
                                                <div className="classNamees__sidebar__comment__rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                            <div className="classNamees__sidebar__comment__text">
                                                <span>04 Mar 2018</span>
                                                <h6>Christina Kelley</h6>
                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="classNamees__details">
                                <div className="classNamees__details__large">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/yoga.jpg`} alt="" />
                                    <span>Beginer</span>
                                </div>
                                <ul className="classNamees__details__widget">
                                    <li><span className="icon_calendar"></span> Mon, Wed, Fri</li>
                                    <li><span className="icon_clock_alt"></span> 18:30 - 19:30</li>
                                </ul>
                                <h2>100 Hour Yoga Course Rishikesh</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered that the alteration in some form by injected humour or the an randomised words
                                    which don’t look even evry is and slightly believable. If you are going to use a passage of
                                    Lorem Ipsum you need to be sure there isn’t is the anything aembarrassing hidden in the
                                    middle of text.Ipsum available but the that majority have that suffered is humour or
                                    randomised words.</p>
                                <div className="classNamees__details__item">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <img src="img/classNamees-details/cd-item-1.jpg" alt="" />
                                        </div>
                                        <div className="col-lg-8 col-md-8">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <img src="img/classNamees-details/cd-item-2.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <img src="img/classNamees-details/cd-item-3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <img src="img/classNamees-details/cd-item-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="classNamees__details__desc">
                                    <h6>The Secret to improving her height to achieve quick result, If you are going to use a
                                        passage of you need to be sure.</h6>
                                    <ul>
                                        <li><span className="icon_check"></span> All their equipment and instruments are alive.</li>
                                        <li><span className="icon_check"></span> The that about to watched storm, so beautiful
                                            terrific.</li>
                                        <li><span className="icon_check"></span> There are many variations of passages of lorem
                                            ppsum available.</li>
                                        <li><span className="icon_check"></span> If you are going to use a passage of you need to be
                                            sure.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* classNamees Section End */}

        </section>
    )
}
