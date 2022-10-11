import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from 'react-leaflet';

import seconds2dmhs from '../../utils/seconds2dhms';

const PopupMsg = ({message}) => {
    /*get number of ms since epoch*/
    const nowTsMs=Date.now();
    const nowTs=Math.round(nowTsMs/1000);

    const itcsTs=message.tsMsgCreationItcs;
    const itcsTsMs=itcsTs*1000;
    const itcsAge=seconds2dmhs(Math.round(nowTs-itcsTs));
    const itcsDate=new Date(itcsTsMs);
    const itcsString=itcsDate.toString()
    return (
	<>
	<Popup>
	    message id: {message.id} <br/>
	    vehicle id: {message.vehicleId} <br/>
	    trip id: {message.tripId} <br/>
	    route id: {message.routeId} <br/>
	    lat: {message.lat} <br/>
	    lon: {message.lon} <br/>
	    <br/>
	    GTFS Realtime age: {itcsAge} <br/>
	</Popup>
	</>
    );
}
export default PopupMsg;

PopupMsg.propTypes = {
    message: PropTypes.object
};
