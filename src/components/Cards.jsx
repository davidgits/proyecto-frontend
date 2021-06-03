import React from 'react'
import Card from "./Card";
import card_img_1 from '../assets/img/aiki.jpg'
import card_img_2 from '../assets/img/buki.jpg'
import card_img_3 from '../assets/img/monk.jpg'

export default function Cards() {

    const cards = [
        {
            id: 1,
            title: "Aikido",
            image: card_img_1,
            url: 'https://ciclos.iesruizgijon.es/',
            // text: 'Esta es la homepage Ciclos del IES Ruiz Gijón'
        },
        {
            id: 2,
            title: "Bukiwaza",
            image: card_img_2,
            url: 'https://yanderedev.wordpress.com/'
        },
        {
            id: 3,
            title: "Meditación Zen",
            image: card_img_3,
            url: 'https://www.youtube.com/watch?v=1_DXtP0XyDw&t=1212s'
        },
    ];

    return (
        <div className="container d-flex justify-content-center h-100 align-items-center mb-5">
            <div className="row">
                {
                    // función map para recorrer atributos del objeto
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} imageURL={card.image} url={card.url} text={card.text}/>
                        </div>
                    ))
                }
                {/* <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div>
                <div className="col-md-4">
                    <Card />
                </div> */}
            </div>
        </div>
    )
}
