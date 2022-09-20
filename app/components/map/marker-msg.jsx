import React from 'react';
import PropTypes from 'prop-types';
import {Marker,Popup} from 'react-leaflet';
import bfly from '../../assets/Logo_SIB_electricindigo.svg';
const MarkerMsg = ({ index,message }) => {
    const iconBfly = new L.Icon({
	iconUrl: bfly,
	iconRetinaUrl: bfly,
	popupAnchor:  [-0, -0],
	iconSize: [32,45],
    });
    return(
	<>
	    <Marker
		index={index}
		position={[message.lat,message.lon]}
		icon={iconBfly}
	    >
		<Popup>
		    id: {message.id} <br/>
		    vehicle id: {message.vehicleId} <br/>
		    ts creation vehicle: {message.tsMsgCreationVehicle} <br/>
		    ts creation ITCS: {message.tsMsgCreationItcs} <br/>
		    ts reception client; {message.tsMsgReception} <br/>
		    trip id: {message.tripId} <br/>
		    trip destination: {message.tripDest} <br/>
		    route id: {message.routeId} <br/>
		    lat: {message.lat} <br/>
		    lon: {message.lon} <br/>
		</Popup>
	    </Marker>
	</>
    );
}
export default MarkerMsg;


MarkerMsg.propTypes = {
    index: PropTypes.number,
    message: PropTypes.object
};
