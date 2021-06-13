import React from 'react'
import PropTypes from 'prop-types'
// estilos
import './courses.css'

export default function Course({ imageURL, date, duration, title, teacher_name, teacher_info, url }) {
    return (
            <div className="classes__item">
                <div className="classes__item__pic set-bg overflow" >
                    <img src={`${process.env.PUBLIC_URL}${imageURL}`} alt="imagen" className='card-img-top'></img>
                    <span>{date}</span>
                </div>
                <div className="classes__item__text">
                    <p>{duration}</p>
                    <h4><a href="/">{title}</a></h4>
                    <h6>{teacher_name} <span>- {teacher_info}</span></h6>
                    <a href={url} className="class-btn">JOIN NOW</a>
                </div>
            </div>
    )
}

Course.propTypes = {
    imageURL: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
    title: PropTypes.string.isRequired,
    teacher_name: PropTypes.string,
    teacher_info: PropTypes.string,
    url: PropTypes.string,
}
