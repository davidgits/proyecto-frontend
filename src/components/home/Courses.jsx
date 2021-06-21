import React from 'react'
import Course from './Course'
// estilos
import "./courses.css"

export default function Courses() {

    const courses = [
        {
            id: 1,
            imageURL: "/assets/images/students.jpg",
            date: "20 Jun 2019",
            duration: "3 Días | Comienza a las 10:00h",
            title: "II Seminario de Karate-do",
            teacher_name: "Jules Olsen sensei",
            teacher_info: "5º dan Shotokai",
            url: "/"
        },
        {
            id: 2,
            imageURL: '/assets/images/yoga.jpg',
            date: "20 Jun 2019",
            duration: "2 Días | Comienza a las 10:00h",
            title: "Curso de Yoga Rishikesh",
            teacher_name: "Jordan Lawson",
            teacher_info: "Yoga Teacher",
            url: "/"
        },
        {
            id: 3,
            imageURL: '/assets/images/aiki.jpg',
            date: "20 Jun 2019",
            duration: "3 Días | Comienza a las 11:00h",
            title: "Curso de Aikido",
            teacher_name: "Jamie Ramírez",
            teacher_info: "6º Dan Aikikai",
            url: "/"
        },
    ]
    return (
        <section className="upcoming-classes spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title normal-title">
                            <h2>Próximos Cursos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed at rerum impedit, architecto tempora eveniet officiis.</p>
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
