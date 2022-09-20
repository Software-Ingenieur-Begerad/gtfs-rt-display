import React, {useEffect,useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Marker} from 'react-leaflet';

import PopupMsg from './popup-msg';
import bfly from '../../assets/Logo_SIB_electricindigo.svg';
const MarkerMsg = ({ index,message }) => {
    /*store state*/
    const [ptByIfleet,setPtByIfleet]=useState({});
    const getPtByIfleet= async ()=>{
	//console.log('trip id: '+message.tripId);
	try{
	    const res=await axios.get(`https://v1gtfs.vbn.api.swingbe.de/pt-by-ifleet?tripshortname=${message.tripId}`);
	    //console.log('res.data: '+JSON.stringify(res.data));
	    /*TODO Warning: Failed prop type: Invalid prop `ptByIfleet` of type `string` supplied to `PopupMsg`, expected `object`.*/
	    setPtByIfleet(res.data);
	}catch(err){
	    console.error('err.message: '+err.message);
	}
    };
    useEffect(()=>{
	getPtByIfleet();
    },[]);
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
		<PopupMsg index={index} message={message} ptByIfleet={ptByIfleet} />
	    </Marker>
	</>
    );
}
export default MarkerMsg;


MarkerMsg.propTypes = {
    index: PropTypes.number,
    message: PropTypes.object
};
