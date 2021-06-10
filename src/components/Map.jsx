import React from 'react'
// react-icons
import { IconContext } from 'react-icons'
import { ImLocation } from 'react-icons/im'
// css
import './map.css'

export default function Map() {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed/v1/search?q=zenshin%20dojo%20sevilla&key=AIzaSyD4F-sk35nMCvSV7fuYaYOiwOzJ3_zlGxU"
                height="500" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title="location-map"></iframe>
            <div className="map-inside">
                <div className="inside-widget">
                    <IconContext.Provider value={{ style: { fontSize: '2em', color: '#e9b1cd', marginBottom: '5px' } }}>
                        <ImLocation />
                    </IconContext.Provider>
                    <h5>Zenshin Dojo</h5>
                    <ul>
                        <li>Tel: (01) 436 8888</li>
                        <li>Add: Calderón de la barca, 44</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
