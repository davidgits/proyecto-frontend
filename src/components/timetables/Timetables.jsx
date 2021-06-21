import React from 'react'
import { Link } from 'react-router-dom'
// componente horario
import Timetable from './Timetable'
// horarios json
import { timeTablesData } from './timeTablesData'
// styles
import './timetables.css'

export default function Timetables() {

    const timetables = timeTablesData;

    // const timetables = [

    //     {
    //         id: 1,
    //         title: "Aikido",
    //         groups: [
    //             {
    //                 id: 1,
    //                 name: "Adultos",
    //                 days: "Lun, Mie, Vie",
    //                 time: "18:30 - 19:30",
    //             },
    //             {
    //                 id: 2,
    //                 name: "Niños (5-12 años)",
    //                 days: "Mar, Jue",
    //                 time: "18:30 - 19:30",
    //             }
    //         ],
    //         image: "/assets/images/aiki1.jpg",
    //         tag: "nav-aiki"
    //     },
    //     {
    //         id: 2,
    //         title: "Karate",
    //         groups: [
    //             {
    //                 id: 1,
    //                 name: "Adultos",
    //                 days: "Lun, Mie, Vie",
    //                 time: "17:30 - 18:30",
    //             },
    //             {
    //                 id: 2,
    //                 name: "Niños (5-12 años)",
    //                 days: "Mar, Jue",
    //                 time: "17:30 - 18:30",
    //             }
    //         ],
    //         image: "/assets/images/karate2.jpg",
    //         tag: "nav-karate"
    //     },
    //     {
    //         id: 3,
    //         title: "Meditación Zen",
    //         groups: [
    //             {
    //                 id: 1,
    //                 name: "Adultos",
    //                 days: "Sab",
    //                 time: "9:00 - 10:00",
    //             }
    //         ],
    //         image: "/assets/images/meditation.jpg",
    //         tag: "nav-zen"
    //     },
    // ]
    
    return (
        <section className="timetables">
            {/* breadcrub */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Horarios</li>
                </ol>
            </nav>
            {/* header image */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/reigei.jpg`} className="w-100" alt="header_dojo_image" />
            {/* header text */}
            <div className="text-secondary px-4 py-5 text-center">
                <div className="py-2">
                    <h1 className="display-5 fw-bold">Horarios</h1>
                </div>
            </div>

            {/* TIMETABLE TABS */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 p-5 mx-auto">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-aiki-tab" data-bs-toggle="tab" data-bs-target="#nav-aiki" type="button" role="tab" aria-controls="nav-aiki" aria-selected="true">Aikido</button>
                                <button className="nav-link" id="nav-karate-tab" data-bs-toggle="tab" data-bs-target="#nav-karate" type="button" role="tab" aria-controls="nav-karate" aria-selected="false">Karate-do</button>
                                <button className="nav-link" id="nav-zen-tab" data-bs-toggle="tab" data-bs-target="#nav-zen" type="button" role="tab" aria-controls="nav-zen" aria-selected="false">Meditación Zen</button>
                                <button className="nav-link" id="nav-yoga-tab" data-bs-toggle="tab" data-bs-target="#nav-yoga" type="button" role="tab" aria-controls="nav-yoga" aria-selected="false">Yoga</button>
                                <button className="nav-link" id="nav-tai-tab" data-bs-toggle="tab" data-bs-target="#nav-tai" type="button" role="tab" aria-controls="nav-tai" aria-selected="false">Tai-Chi</button>
                                <button className="nav-link" id="nav-jap-tab" data-bs-toggle="tab" data-bs-target="#nav-jap" type="button" role="tab" aria-controls="nav-jap" aria-selected="false">Japonés</button>
                            </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">

                            {
                                timetables.map((timetable) => (
                                        <Timetable key={timetable.id} id={timetable.id} title={timetable.title} groups={timetable.groups} image={timetable.image} tag={timetable.tag}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
