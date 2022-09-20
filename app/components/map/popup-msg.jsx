import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from 'react-leaflet';
const PopupMsg = ({index,message,ptByIfleet}) => {
    return (
	<>
	<Popup
	    index={index}>
	    id: {message.id} <br/>
	    vehicle id: {message.vehicleId} <br/>
	    ts creation vehicle: {message.tsMsgCreationVehicle} <br/>
	    ts creation ITCS: {message.tsMsgCreationItcs} <br/>
	    ts reception client; {message.tsMsgReception} <br/>
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
