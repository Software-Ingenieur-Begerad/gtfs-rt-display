import React from 'react';
import PropTypes from 'prop-types';
import {Marker} from 'react-leaflet';

import PopupMsg from './popup-msg';
import getIcon from './icon';

const MarkerMsgPlus = ({ index,message,ptByIfleet }) => {

    if(message===undefined || message===null
       || Object.keys(ptByIfleet).length===0){
	return null;
    }else{
	const markerIcon=getIcon(ptByIfleet);
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
		    <PopupMsg index={index} message={message} ptByIfleet={ptByIfleet} />
		</Marker>
	    </>
	);
	}
    }
}
export default MarkerMsgPlus;


MarkerMsgPlus.propTypes = {
    index: PropTypes.number,
    message: PropTypes.object,
    ptByIfleet: PropTypes.object
};
