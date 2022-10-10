import React from 'react';
import PropTypes from 'prop-types';
import {Marker} from 'react-leaflet';

import PopupMsg from './popup-msg-gtfs';
import getIcon from './icon-gtfs';

const MarkerMsgPlusGtfs = ({ message,ptByIfleet }) => {

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
		    position={[message.lat,message.lon]}
		    icon={markerIcon}
		>
		    <PopupMsg message={message} ptByIfleet={ptByIfleet} />
		</Marker>
	    </>
	);
	}
    }
}
export default MarkerMsgPlusGtfs;


MarkerMsgPlusGtfs.propTypes = {
    message: PropTypes.object,
    ptByIfleet: PropTypes.object
};
