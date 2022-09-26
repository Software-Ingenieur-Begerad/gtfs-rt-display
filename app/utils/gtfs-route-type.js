/* return GTFS route_type as text*/
export default function getRouteType(routeTypeEnum){
    //console.log('getRouteType() routeTypeEnum: '+routeTypeEnum);
    return routeTypeEnum==='0'?'Tram':
	routeTypeEnum===1?'Subway':
	routeTypeEnum===2?'Rail':
	routeTypeEnum===3?'Bus':
	routeTypeEnum===4?'Ferry':
	routeTypeEnum===5?'Cable tram':
	routeTypeEnum===6?'Aerial lift':
	routeTypeEnum===7?'Funicular':
	routeTypeEnum===11?'Trolleybus':
	routeTypeEnum===12?'Monorail':'Unknown';
};
