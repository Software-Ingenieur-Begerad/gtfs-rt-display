import React from 'react';
import PropTypes from 'prop-types';
import {Marker} from 'react-leaflet';

import PopupMsg from './popup-msg';
import getIcon from './icon';

const MarkerMsgPlus = ({ message }) => {

    if(message===undefined || message===null){
	return null;
    }else{
	const markerIcon=getIcon();
	if(markerIcon===null){
	    return null;
	}else{
	return(
	    <>
		<Marker
		    position={[message.lat,message.lon]}
		    icon={markerIcon}
		>
		    <PopupMsg message={message} />
		</Marker>
	    </>
	);
	}
    }
}
export default MarkerMsgPlus;


MarkerMsgPlus.propTypes = {
    message: PropTypes.object
};
