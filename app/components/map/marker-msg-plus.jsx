import React from 'react';
import PropTypes from 'prop-types';
import {Marker} from 'react-leaflet';

import PopupMsg from './popup-msg';
import getIcon from './icon';

const MarkerMsgPlus = ({ index,message }) => {

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
		    index={index}
		    key={index}
		    position={[message.lat,message.lon]}
		    icon={markerIcon}
		>
		    <PopupMsg index={index} message={message} />
		</Marker>
	    </>
	);
	}
    }
}
export default MarkerMsgPlus;


MarkerMsgPlus.propTypes = {
    index: PropTypes.number,
    message: PropTypes.object
};
