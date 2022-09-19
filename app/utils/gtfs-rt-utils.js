import Pbf from 'pbf';

import { FeedMessage } from './gtfs-rt.js';
import charIntoString from './string';

export default function parseMessages(buffer){
    console.log('parseMessages() start...');
    const messages = [];
    const pbf = new Pbf(buffer);
    const feed = FeedMessage.read(pbf);

    /*Version of the feed specification. The current version is 2.0.*/
    let gtfs_realtime_version;

    let incrementality;

    /*This timestamp identifies the moment when the content of this feed has been created (in server time). In POSIX time (i.e., number of seconds since January 1st 1970 00:00:00 UTC). To avoid time skew between systems producing and consuming realtime information it is strongly advised to derive timestamp from a time server. It is completely acceptable to use Stratum 3 or even lower strata servers since time differences up to a couple of seconds are tolerable.*/
    let timestampFeed = null;
    if (feed.header) {
	//console.log('getVehPos() header available');
	gtfs_realtime_version=feed.header.gtfs_realtime_version;
	incrementality=feed.header.incrementality;
	timestampFeed=feed.header.timestamp;
    }else{
	console.error('getVehPos() header NOT available');
    }
    feed.entity.forEach(entity => {
	/*Data about the realtime position of a vehicle.*/
	const vehiclePos = entity.vehicle;
	if (vehiclePos) {
	    //console.log('getVehPos() vehiclePos available');
	    /*The Trip that this vehicle is serving.*/
	    const trip=vehiclePos.trip;
	    /*Additional information on the vehicle that is serving this trip.*/
	    const vehicle=vehiclePos.vehicle;
	    /*Current position of this vehicle.*/
	    const position=vehiclePos.position;
	    /*Moment at which the vehicle's position was measured. In POSIX time (i.e., number of seconds since January 1st 1970 00:00:00 UTC).*/
	    const vehPosTimestamp=vehiclePos.timestamp;
	    //remove tailing dot
	    //match a dot when it is followed by a whitespace or the end of the string
	    /*TODO Is this precaution required?*/
	    let latFormed = position.latitude === undefined ? -360 : position.latitude.toString().replace(/\.+$/, "");
	    //console.log(`getVehPos() latFormed:${latFormed}`);
	    latFormed=charIntoString(latFormed,latFormed.length - 7,'.');
	    //console.log(`getVehPos() latFormed:${latFormed}`);
	    let lonFormed = position.longitude === undefined ? -720 : position.longitude.toString().replace(/\.+$/, "");
	    lonFormed=charIntoString(lonFormed,lonFormed.length - 7,'.');
	    //console.log(`getVehPos() lonFormed:${lonFormed}`);
	    const now= new Date();
	    const message={
		headerGtfsRealtimeVersion: gtfs_realtime_version === undefined ? -1 : parseInt(gtfs_realtime_version,10) || -2,
		/*ts msg creation at vehicle in s*/
		tsMsgCreationVehicle: vehPosTimestamp === undefined ? -1 : parseInt(vehPosTimestamp,10) || -2,
		/*ts msg creation at ITCS in s*/
		tsMsgCreationItcs: timestampFeed === undefined ? -1 : parseInt(timestampFeed,10) || -2,
		/*ts msg reception at client in ms and convert to s*/
		tsMsgReception: Math.floor(now.getTime() / 1000),
		/*Feed-unique identifier for this entity. The ids are used only to provide incrementality support.*/
		//TODO Shall id be matched with IVU tenant?
		id: entity.id === undefined ? -1 : parseInt(entity.id,10) || -2,
		/*Internal system identification of the vehicle.*/
		//TODO Shall id be matched with IVU vehicle id?
		vehicleId: vehicle.id === undefined ? '' : vehicle.id,
		/*The trip_id from the GTFS feed that this selector refers to.*/
		tripId: trip.trip_id === undefined ? -1 : parseInt(trip.trip_id,10) || -2,
		/*The route_id from the GTFS that this selector refers to.*/
		routeId: trip.route_id === undefined ? -1 : parseInt(trip.route_id,10) || -2,
		lat: latFormed,
		lon: lonFormed,
	    };
	    messages.push(message);
	} else {
	    console.error('getVehPos() vehiclePos NOT available');
	}
    });
    console.log('parseMessages() done.');
    return messages;
};
