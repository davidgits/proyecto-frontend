import React from 'react'
import PropTypes from 'prop-types'
// react-icons
import { BiCalendarAlt } from 'react-icons/bi'
import { BsClock } from 'react-icons/bs'

export default function Timetable({ id, title, groups, image, tag }) {
    return (
        <div className={
            (id === 1) ?
                `tab-pane fade show active`
                :
                `tab-pane fade`
        }
            id={tag} role="tabpanel" aria-labelledby={`${tag}-tab`}>
            <div className="row">
                <div className="col-lg-4">
                    <div className="classes__sidebar">
                        <div className="classes__sidebar__item classes__sidebar__item--info mt-5">
                            <h4>Horario de Clases {title}</h4>
                            {
                                groups.map((group) => (
                                    <div className="group" key={group.id}>
                                        <h5>Grupo {group.name}</h5>
                                        <ul className="classes__sidebar__item__widget">
                                            <li><BiCalendarAlt /> {group.days}</li>
                                            <li><BsClock /> {group.time}</li>
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="p-5">
                        <img src={`${process.env.PUBLIC_URL}${image}`} className="img-thumbnail" alt={`header_${title}_image`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Timetable.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    groups: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            days: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired
        }
    )),
    image: PropTypes.string,
    tag: PropTypes.string.isRequired
}
