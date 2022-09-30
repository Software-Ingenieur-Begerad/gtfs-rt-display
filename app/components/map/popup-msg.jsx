import React from 'react';
import PropTypes from 'prop-types';
import {Popup} from 'react-leaflet';

import seconds2dmhs from '../../utils/seconds2dhms';
import getRouteType from '../../utils/gtfs-route-type';

const PopupMsg = ({index,message,ptByIfleet}) => {
    /*get number of ms since epoch*/
    const nowTsMs=Date.now();
    const nowTs=Math.round(nowTsMs/1000);
    const nowAge=seconds2dmhs(Math.round(nowTs-nowTs));
    const nowDate=new Date(nowTsMs);
    const nowString=nowDate.toString();
    const itcsTs=message.tsMsgCreationItcs;
    const itcsTsMs=itcsTs*1000;
    const itcsAge=seconds2dmhs(Math.round(nowTs-itcsTs));
    const itcsDate=new Date(itcsTsMs);
    const itcsString=itcsDate.toString()
    const clientTs=message.tsMsgReception;
    const clientTsMs=clientTs*1000;
    const clientAge=seconds2dmhs(Math.round(nowTs-clientTs));
    const clientDate=new Date(clientTsMs);
    const clientString=clientDate.toString();
    return (
	<>
	<Popup
	    index={index}
	    key={index}
	>
	    id: {message.id} <br/>
	    vehicle id: {message.vehicleId} <br/>
	    now: ts(ms):{nowTsMs} <br/>
	    now: ts(s):{nowTs} <br/>
	    now: date:{nowString} <br/>
	    now: age:{nowAge} <br/>
	    creation time at ITCS: ts:{itcsTs} <br/>
	    creation time at ITCS: date:{itcsString} <br/>
	    creation time at ITCS: age:{itcsAge} <br/>
	    reception time at client: ts:{clientTs} <br/>
	    reception time at client: date:{clientString} <br/>
	    reception time at client: age:{clientAge} <br/>
	    trip id: {ptByIfleet.trip_id} <br/>
	    trip name: {ptByIfleet.trip_short_name} <br/>
	    trip destination: {ptByIfleet.trip_headsign} <br/>
	    route id: {ptByIfleet.route_id} <br/>
	    route name: {ptByIfleet.route_short_name} <br/>
	    route type: {ptByIfleet.route_type}({getRouteType(ptByIfleet.route_type)}) <br/>
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
