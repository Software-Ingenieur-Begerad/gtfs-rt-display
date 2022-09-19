import React from 'react';
import PropTypes from 'prop-types';
import {MapContainer,TileLayer} from 'react-leaflet';
/*JS module import (vs cdn or style link)*/
import 'leaflet/dist/leaflet.css'
import './map.css';

import MsgMarker from './marker-msg';

export default function Map({messages}) {
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
		{
		    messages.map(function(value,key) {
			//console.log(`key: ${key}, value: ${value}`);
			return <MsgMarker key={key} index={key} message={value}/>;
                    })
		}
	    </MapContainer>
	</>
    );
}
Map.propTypes = {
    messages: PropTypes.array
};
