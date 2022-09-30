import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';

import MarkerMsgPlus from './marker-msg-plus';

const MarkerMsg = ({ index,message }) => {
    if(message===undefined || message===null){
	return null;
    }else{
	return(
	    <>
		<MarkerMsgPlus
		    index={index}
		    key={index}
		    message={message}
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
