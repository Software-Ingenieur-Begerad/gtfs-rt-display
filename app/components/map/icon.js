import bfly from '../../assets/Logo_SIB_electricindigo.svg';

/*return icon object*/
export default function getIcon(){
    //console.log('getIcon(): ptByIfleet available')
    const icon = new L.Icon({
	/*path to icon graphic*/
	iconUrl: bfly,
	/*path to graphic used for high resolution monitors*/
	iconRetinaUrl: bfly,
	popupAnchor:  [-0, -0],
	/*size of the icon in width and hight*/
	iconSize: [32,32],
	/*determine how the popup is positions relative to the actual point on the map*/
	popupAnchor:[0,-10],
	/*determine how the image is positions relative to the actual point on the map*/
	iconAnchor: null,
	/*path to shadow graphic*/
	shadowUrl: null,
	/*size of the shadow in width and hight*/
	shadowSize: null,
	/*determine how the mage is positions relative to the actual point on the map*/
	shadowAnchor: null,
	className: 'marker-msg'
    });
    //console.log('getIcon(): icon available')
    return icon;
}
