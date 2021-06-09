import React from 'react'
// react-icons
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
                <ImLocation />
                <div className="inside-widget">
                    <h5>Zenshin Dojo</h5>
                    <ul>
                        <li>Phone: +65 11.188.888</li>
                        <li>Add: 60-49 Road 11378 New York</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
