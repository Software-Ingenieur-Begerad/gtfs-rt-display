import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';

import MarkerMsgPlus from './marker-msg-plus';

const MarkerMsg = ({ message }) => {
    if(message===undefined || message===null){
	return null;
    }else{
	return(
	    <>
		<MarkerMsgPlus
		    message={message}
		/>
	    </>
	);
    }
}
export default MarkerMsg;


MarkerMsg.propTypes = {
    message: PropTypes.object
};
