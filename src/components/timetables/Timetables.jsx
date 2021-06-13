import React from 'react'
import './timetables.css'

export default function Timetables() {
    return (
        <section className="timetables">

            {/* Classes Section Begin */}
            <section class="classes-details spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="classes__sidebar">
                                <div class="classes__sidebar__item classes__sidebar__item--info">
                                    <h4>Classes Information</h4>
                                    <ul class="classes__sidebar__item__widget">
                                        <li><span class="icon_calendar"></span> Mon, Wed, Fri</li>
                                        <li><span class="icon_clock_alt"></span> 18:30 - 19:30</li>
                                    </ul>
                                    <ul class="classes__sidebar__item__id">
                                        <li><span class="icon_pin_alt"></span> 184 Main Collins Streets, New York</li>
                                        <li><span class="icon_id"></span> Jordan Lawson</li>
                                    </ul>
                                    <a href="#" class="sidebar-btn">JOIN NOW</a>
                                </div>
                                <div class="classes__sidebar__item">
                                    <h4>About Instructor</h4>
                                    <div class="classes__sidebar__instructor">
                                        <div class="classes__sidebar__instructor__pic">
                                            <img src="img/classes-details/classes-instructor.png" alt="" />
                                        </div>
                                        <div class="classes__sidebar__instructor__text">
                                            <div class="classes__sidebar__instructor__title">
                                                <h4>Tracy Maclaren</h4>
                                                <span>Yoga Teacher</span>
                                            </div>
                                            <p>Yoga & Therapy Certificate of<br /> Uttarakhand University Sanskirt</p>
                                            <div class="classes__sidebar__instructor__social">
                                                <a href="#"><span class="social_facebook"></span></a>
                                                <a href="#"><span class="social_twitter"></span></a>
                                                <a href="#"><span class="social_instagram"></span></a>
                                                <a href="#"><span class="social_linkedin"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="classes__sidebar__item">
                                    <h4>Review & Comment</h4>
                                    <div class="classes__sidebar__comment__list">
                                        <div class="classes__sidebar__comment">
                                            <div class="classes__sidebar__comment__pic">
                                                <img src="img/classes-details/comment-1.png" alt="" />
                                                <div class="classes__sidebar__comment__rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                            <div class="classes__sidebar__comment__text">
                                                <span>04 Mar 2018</span>
                                                <h6>Brandon Kelley</h6>
                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                                    adipisci velit,</p>
                                            </div>
                                        </div>
                                        <div class="classes__sidebar__comment">
                                            <div class="classes__sidebar__comment__pic">
                                                <img src="img/classes-details/comment-2.png" alt="" />
                                                <div class="classes__sidebar__comment__rating">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star-half-o"></i>
                                                </div>
                                            </div>
                                            <div class="classes__sidebar__comment__text">
                                                <span>04 Mar 2018</span>
                                                <h6>Christina Kelley</h6>
                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="classes__details">
                                <div class="classes__details__large">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/yoga.jpg`} alt="" />
                                    <span>Beginer</span>
                                </div>
                                <ul class="classes__details__widget">
                                    <li><span class="icon_calendar"></span> Mon, Wed, Fri</li>
                                    <li><span class="icon_clock_alt"></span> 18:30 - 19:30</li>
                                </ul>
                                <h2>100 Hour Yoga Course Rishikesh</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered that the alteration in some form by injected humour or the an randomised words
                                    which don’t look even evry is and slightly believable. If you are going to use a passage of
                                    Lorem Ipsum you need to be sure there isn’t is the anything aembarrassing hidden in the
                                    middle of text.Ipsum available but the that majority have that suffered is humour or
                                    randomised words.</p>
                                <div class="classes__details__item">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4">
                                            <img src="img/classes-details/cd-item-1.jpg" alt="" />
                                        </div>
                                        <div class="col-lg-8 col-md-8">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6">
                                                    <img src="img/classes-details/cd-item-2.jpg" alt="" />
                                                </div>
                                                <div class="col-lg-6 col-md-6">
                                                    <img src="img/classes-details/cd-item-3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <img src="img/classes-details/cd-item-4.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="classes__details__desc">
                                    <h6>The Secret to improving her height to achieve quick result, If you are going to use a
                                        passage of you need to be sure.</h6>
                                    <ul>
                                        <li><span class="icon_check"></span> All their equipment and instruments are alive.</li>
                                        <li><span class="icon_check"></span> The that about to watched storm, so beautiful
                                            terrific.</li>
                                        <li><span class="icon_check"></span> There are many variations of passages of lorem
                                            ppsum available.</li>
                                        <li><span class="icon_check"></span> If you are going to use a passage of you need to be
                                            sure.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Classes Section End */}

        </section>
    )
}
