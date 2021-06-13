import React from 'react'
// estilos
import "./gallery.css"

export default function Gallery() {

    const galleryImages = [
        {
            id: 1,
            title: "Curso de Yoga 2019",
            image: `${process.env.PUBLIC_URL}/assets/images/yoga2.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 2,
            title: "Seminario de Aikido de Mirin Kombu 2018",
            image:`${process.env.PUBLIC_URL}/assets/images/aiki.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 3,
            title: "Yoga",
            image: `${process.env.PUBLIC_URL}/assets/images/yoga.jpg`,
            author: "photo by Hatake Kakashi"

        },
        {
            id: 4,
            title: "Examen de chounin en la Villa del Viento",
            image: `${process.env.PUBLIC_URL}/assets/images/students.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 5,
            title: "Torii",
            image: `${process.env.PUBLIC_URL}/assets/images/torii.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 6,
            title: "Karate-do",
            image: `${process.env.PUBLIC_URL}/assets/images/karatedo.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 7,
            title: "Tai-Chi",
            image: `${process.env.PUBLIC_URL}/assets/images/taichi.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 8,
            title: "Meditation",
            image: `${process.env.PUBLIC_URL}/assets/images/meditation.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 9,
            title: "Nihongo",
            image: `${process.env.PUBLIC_URL}/assets/images/japanese.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 10,
            title: "Curso de yoga 2020",
            image: `${process.env.PUBLIC_URL}/assets/images/yoga_stretch.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 11,
            title: "Examen karate cinturón azul",
            image: `${process.env.PUBLIC_URL}/assets/images/karate2.jpg`,
            author: "photo by Hatake Kakashi"
        },
        {
            id: 12,
            title: "Curso de karate en la playa",
            image: `${process.env.PUBLIC_URL}/assets/images/karatebeach.jpg`,
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
                                <a data-fancybox="gallery" href={`${image.image}`} data-caption={`'${image.title}'</br>${image.author}`}>
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
