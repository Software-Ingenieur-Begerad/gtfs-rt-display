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
		    route id: {message.routeId}
		    ts creation: {message.tsMsgCreation}
		    ts reception; {message.tsMsgReception}		    
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
