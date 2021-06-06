import React from "react";
import PropTypes from 'prop-types'
import './cards.css'

export default function Card({title, subtitle, imageURL, text, url}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp mt-3 gx-3 h-95">
            <div className="overflow">
                <img src={imageURL} alt="imagen" className='card-img-top'></img>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle ? subtitle: "Card subtitle"}</h6>
                <p className="card-text text-secondary">
                    {
                        // si texto existe utiliza texto, si no utiliza el lorem
                        text ? text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore praesentium ipsam deleniti quia porro repudiandae ut iste perspiciatis accusamus quibusdam."
                    }
                </p>
                <a href={url} className="btn btn-outline-secondary rounded-0" rel="noreferrer" target='_blank'>
                    Ir a la Actividad
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageURL: PropTypes.string,
    text: PropTypes.string
}