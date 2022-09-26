import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from 'react-leaflet';

import seconds2dmhs from '../../utils/seconds2dhms';
const PopupMsg = ({index,message,ptByIfleet}) => {
    const vehicleAge=seconds2dmhs(Math.round(((Date.now()-message.tsMsgCreationVehicle*1000)/1000).toFixed(0)));
    const itcsAge=seconds2dmhs(Math.round(((Date.now()-message.tsMsgCreationItcs*1000)/1000).toFixed(0)));
    const clientAge=seconds2dmhs(Math.round(((Date.now()-message.tsMsgReception*1000)/1000).toFixed(0)));
    return (
	<>
	<Popup
	    index={index}>
	    id: {message.id} <br/>
	    vehicle id: {message.vehicleId} <br/>
	    creation time at vehicle: ts:{message.tsMsgCreationVehicle}, age:{vehicleAge} <br/>
	    creation time at ITCS: ts:{message.tsMsgCreationItcs}, age:{itcsAge} <br/>
	    reception time at client: ts:{message.tsMsgReception}, age:{clientAge} <br/>
	    trip id: {ptByIfleet.trip_id} <br/>
	    trip name: {ptByIfleet.trip_short_name} <br/>
	    trip destination: {ptByIfleet.trip_headsign} <br/>
	    route id: {ptByIfleet.route_id} <br/>
	    route name: {ptByIfleet.route_short_name} <br/>
	    route type: {ptByIfleet.route_type} <br/>
	    agency id: {ptByIfleet.agency_id} <br/>
	    agency name: {ptByIfleet.agency_name} <br/>
	    agency URL: {ptByIfleet.agency_url} <br/>
	    lat: {message.lat} <br/>
	    lon: {message.lon} <br/>
	</Popup>
	</>
    );
}
export default PopupMsg;


PopupMsg.propTypes = {
    index: PropTypes.number,
    message: PropTypes.object,
    ptByIfleet: PropTypes.object
};
