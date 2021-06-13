import React from 'react'
// componentes
import Card from "./Card";

export default function Cards() {

    const cards = [
        {
            id: 1,
            title: "Aikido",
            subtitle: "Niños y Adultos",
            image: '/assets/images/aiki.jpg',
            url: 'https://ciclos.iesruizgijon.es/',
            // text: 'Clases para Niños y Adultos.'
        },
        {
            id: 2,
            title: "Karate-do",
            subtitle: "Niños y Adultos",
            image: '/assets/images/karatedo.jpg',
            url: 'https://yanderedev.wordpress.com/'
        },
        {
            id: 3,
            title: "Meditación Zen",
            subtitle: "Grupos reducidos",
            image: '/assets/images/meditation.jpg',
            url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw&t=1212s'
        },
        {
            id: 4,
            title: "Yoga",
            subtitle: "Todos los niveles",
            image: '/assets/images/yoga2.jpg',
            url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw&t=1212s'
        },
        {
            id: 5,
            title: "Tai-Chi",
            subtitle: "Solo fines de semana",
            image: '/assets/images/taichi.jpg',
            url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw&t=1212s'
        },
        {
            id: 6,
            title: "Clases de Japonés",
            subtitle: "Profesora nativa",
            image: '/assets/images/japanese.jpg',
            url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw&t=1212s'
        },
    ];

    return (
        <div className="container">
            <div className="row section-title">
                <h2 className="text-center">Nuestras actividades</h2>
            </div>
            <div className="container d-flex justify-content-center h-100 align-items-center mb-5">
                <div className="row">
                    {
                        // función map para recorrer atributos del objeto
                        cards.map((card) => (
                            <div className="col-md-6 col-lg-4" key={card.id}>
                                <Card title={card.title} subtitle={card.subtitle} imageURL={card.image} url={card.url} text={card.text} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
