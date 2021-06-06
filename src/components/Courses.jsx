import React from 'react'
import Course from './Course'
import "./courses.css"
import course_img1 from '../assets/img/students.jpg'
import course_img2 from '../assets/img/yoga.jpg'
import course_img3 from '../assets/img/aiki.jpg'

export default function Courses() {

    const courses = [
        {
            id: 1,
            imageURL: course_img1,
            date: "20 Jun 2019",
            duration: "14 Days | Start on 10th Every Month",
            title: "100 Hour Yoga Course Rishikesh",
            teacher_name: "Jordan Lawson",
            teacher_info: "- Yoga Teacher",
            url: "/"
        },
        {
            id: 2,
            imageURL: course_img2,
            date: "20 Jun 2019",
            duration: "14 Days | Start on 10th Every Month",
            title: "100 Hour Yoga Course Rishikesh",
            teacher_name: "Jordan Lawson",
            teacher_info: "- Yoga Teacher",
            url: "/"
        },
        {
            id: 3,
            imageURL: course_img3,
            date: "20 Jun 2019",
            duration: "14 Days | Start on 10th Every Month",
            title: "100 Hour Yoga Course Rishikesh",
            teacher_name: "Jordan Lawson",
            teacher_info: "- Yoga Teacher",
            url: "/"
        },
    ]
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
                    {
                        courses.map((course) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={course.id}>
                                <Course
                                    imageURL={course.imageURL}
                                    date={course.date}
                                    duration={course.duration}
                                    title={course.title}
                                    teacher_name={course.teacher_name}
                                    teacher_info={course.teacher_info}
                                    url={course.url}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
