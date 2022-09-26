import bfly from '../../assets/Logo_SIB_electricindigo.svg';
import bus from '../../assets/bus.svg';
import train from '../../assets/train.svg';
import tram from '../../assets/tram.svg';

/* return URL that fits GTFS route_type*/
export default function getIconUrl(routeTypeEnum){
    //console.log('getIconUrl() routeTypeEnum: '+routeTypeEnum);
    return routeTypeEnum===0?tram:
	routeTypeEnum===1?bfly:
	routeTypeEnum===2?train:
	routeTypeEnum===3?bus:
	bfly;
}
