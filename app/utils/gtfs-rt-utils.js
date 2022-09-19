import Pbf from 'pbf';

import { FeedMessage } from './gtfs-rt.js';
import charIntoString from './string';

export default function parseMessages(buffer){
    console.log('parseMessages() start...');
    const messages = [];
    const pbf = new Pbf(buffer);
    const feed = FeedMessage.read(pbf);
    let gtfs_realtime_version, incrementality, timestamp = null;
    if (feed.header) {
	//console.log('getVehPos() header available');
	gtfs_realtime_version=feed.header.gtfs_realtime_version;
	incrementality=feed.header.incrementality;
	timestamp=feed.header.timestamp;
	if(gtfs_realtime_version && incrementality, timestamp){
	    //console.log(`getVehPos() gtfs_realtime_version: ${gtfs_realtime_version}, incrementaltiy: ${incrementality}, timestamp: ${timestamp} available`);
	}
    }else{
	console.error('getVehPos() header NOT available');
    }
    feed.entity.forEach(entity => {
	const vehiclePos = entity.vehicle;
	if (vehiclePos) {
	    //console.log('getVehPos() vehiclePos available');
	    const { trip, position, vehicle } = vehiclePos;
	    if (trip && position && vehicle) {
		const {trip_id, route_id, direction_id, start_time, start_date, schedule_relationship}=trip;
		if(trip_id){
		    //console.log(`getVehPos() trip_id:${trip_id} available`);
		}else{
		    console.log(`getVehPos() trip_id NOT available`);
		}
		if(route_id){
		    //console.log(`getVehPos() route_id:${route_id} available`);
		}else{
		    console.log(`getVehPos() route_id NOT available`);
		}
		if(direction_id){
		    //console.log(`getVehPos() direction_id:${direction_id} available`);
		}else{
		    console.log(`getVehPos() direction_id NOT available`);
		}
		const {latitude, longitude, bearing, odometer, speed}=position;
		if(latitude){
		    //console.log(`getVehPos() latitude:${latitude} available`);
		}
		if(longitude){
		    //console.log(`getVehPos() longitude:${longitude} available`);
		}
		//remove tailing dot
		//match a dot when it is followed by a whitespace or the end of the string
		/*TODO Is this precaution required?*/
		let latFormed = latitude.toString().replace(/\.+$/, "");
		//console.log(`getVehPos() latFormed:${latFormed}`);
		latFormed=charIntoString(latFormed,latFormed.length - 7,'.');
		//console.log(`getVehPos() latFormed:${latFormed}`);
		let lonFormed = longitude.toString().replace(/\.+$/, "");
		lonFormed=charIntoString(lonFormed,lonFormed.length - 7,'.');
		//console.log(`getVehPos() lonFormed:${lonFormed}`);
		const message={
		    headerGtfsRealtimeVersion: gtfs_realtime_version === undefined ? -1 : parseInt(gtfs_realtime_version,10) || -2,
		    headerIncrementality: incrementality === undefined ? -1 : parseInt(incrementality,10) || -2,
		    headerTimestamp : timestamp === undefined ? -1 : parseInt(timestamp,10) || -2,
		    routeId: route_id === undefined ? -1 : parseInt(route_id,10) || -2,
		    lat: latFormed === undefined ? -360 : latFormed,
		    lon: lonFormed === undefined ? -720 : lonFormed,
		};
		messages.push(message);
	    } else {
		console.error('getVehPos() trip, position & vehicle NOT unavailable ');
	    }
	} else {
	    console.error('getVehPos() vehiclePos NOT available');
	}
    });
    console.log('parseMessages() done.');
    return messages;
};
