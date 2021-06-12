import React from 'react'
// images
import gallery_1 from '../assets/img/yoga2.jpg'
import gallery_2 from '../assets/img/aiki.jpg'
import gallery_3 from '../assets/img/yoga.jpg'
import gallery_4 from '../assets/img/students.jpg'
import gallery_5 from '../assets/img/torii.jpg'
import gallery_6 from '../assets/img/karatedo.jpg'
import gallery_7 from '../assets/img/taichi.jpg'
import gallery_8 from '../assets/img/meditation.jpg'
import gallery_9 from '../assets/img/japanese.jpg'
import gallery_10 from '../assets/img/yoga_stretch.jpg'
import gallery_11 from '../assets/img/karate2.jpg'
import gallery_12 from '../assets/img/karatebeach.jpg'
// styles
import "./gallery.css"

export default function Gallery() {

    const galleryImages = [
        {
            id: 1,
            title: "Curso de Yoga 2019",
            image: gallery_1,
            imagebig: gallery_1,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 2,
            title: "Seminario de Aikido de Mirin Kombu 2018",
            image: gallery_2,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 3,
            title: "Yoga",
            image: gallery_3,
            author: "photo by Hatake Kakashi"

        },
        {
            id: 4,
            title: "Examen de chounin en la Villa del Viento",
            image: gallery_4,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 5,
            title: "Torii",
            image: gallery_5,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 6,
            title: "Karate-do",
            image: gallery_6,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 7,
            title: "Tai-Chi",
            image: gallery_7,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 8,
            title: "Meditation",
            image: gallery_8,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 9,
            title: "Nihongo",
            image: gallery_9,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 10,
            title: "Curso de yoga 2020",
            image: gallery_10,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 11,
            title: "Examen karate cinturón azul",
            image: gallery_11,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 12,
            title: "Curso de karate en la playa",
            image: gallery_12,
            author: "photo by Hatake Kakashi"
        },
    ];

    return (
        <div className="container">
            {/* title */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold">Galería de imágenes</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                </div>
            </div>
            <section className="gallery p-3">
                {/* Gallery */}
                <div className="row">
                    {
                        galleryImages.map((image) => (
                            <div className="item col-lg-3 col-md-6 mb-4 mb-lg-3" key={image.id}>
                                <a data-fancybox="gallery" href={image.image} data-caption={`'${image.title}'</br>${image.author}`}>
                                    <img
                                        src={image.image}
                                        title={image.title}
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt={image.title}
                                    />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
