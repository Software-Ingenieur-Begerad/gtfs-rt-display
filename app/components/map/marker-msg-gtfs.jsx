import React, {useEffect,useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import MarkerMsgPlus from './marker-msg-plus-gtfs';

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

    if(message===undefined || message===null
       || Object.keys(ptByIfleet).length===0){
	return null;
    }else{
	return(
	    <>
		<MarkerMsgPlus
		    index={index}
		    key={index}
		    message={message}
		    ptByIfleet={ptByIfleet}
		/>
	    </>
	);
    }
}
export default MarkerMsg;


MarkerMsg.propTypes = {
    index: PropTypes.number,
    message: PropTypes.object
};
