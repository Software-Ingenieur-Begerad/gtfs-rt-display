import React from 'react';
import {MapContainer,TileLayer} from 'react-leaflet';
/*JS module import (vs cdn or style link)*/
import 'leaflet/dist/leaflet.css'
import './map.css';
export default function Map() {
    const position = [53.2206976, 7.7585528]
    return (
	<>
	    {/*TODO remove debugging*/}
	    <h1>Map</h1>
	    <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
		<TileLayer
		    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
	    </MapContainer>
	</>
    );
}
