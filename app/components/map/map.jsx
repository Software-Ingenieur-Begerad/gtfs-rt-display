import React from 'react';
import PropTypes from 'prop-types';
import {MapContainer,TileLayer} from 'react-leaflet';
/*JS module import (vs cdn or style link)*/
import 'leaflet/dist/leaflet.css'
import './map.css';

import MsgMarkerWithGtfs from './marker-msg-gtfs';
import MsgMarkerWithoutGtfs from './marker-msg';

export default function Map({messages}) {
    /*lat and lon of Braunschweig,DE*/
    const position = [52.26594, 10.52673]
    //TODO make this switch available via configuration!
    const hasGtfs = false;
    return (
	<>
	    <MapContainer
		center={position}
		zoom={4}
		minZoom={2}
		scrollWheelZoom={true}
	    >
		<TileLayer
		    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		{
		    messages.map(function(value,key) {
			//console.log(`key: ${key}, value: ${value.vehicleId}`);
			if(hasGtfs){
			    return <MsgMarkerWithGtfs key={value.vehicleId} index={value.vehicleId} message={value}/>;
			}else{
			    return <MsgMarkerWithoutGtfs key={value.vehicleId} index={value.vehicleId} message={value}/>;
			}
                    })
		}
	    </MapContainer>
	</>
    );
}
Map.propTypes = {
    messages: PropTypes.array
};
