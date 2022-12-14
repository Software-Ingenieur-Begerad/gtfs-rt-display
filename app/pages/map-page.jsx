import React, {useEffect,useState} from 'react';
import axios from 'axios';

import Map from '../components/map/map';
import parseMessages from '../utils/gtfs-rt-utils';
export default function MapPage() {
    /*storage*/
    const [vehPos, setVehPos] = useState([]);
    const getData= async ()=>{
	//console.log('getData() start...');
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
	    //TODO Make fields available via configuration!
            let url = 'https://api.entur.io/realtime/v1/gtfs-rt/vehicle-positions';
            const res = await axios.get(url,
					{
					    responseType: 'arraybuffer'
					    //responseType: 'blob'
					});
            if(res.data){
		//TODO remove debugging
                //console.log('getVehPos() res available');
		/*parse messages*/
		const messages = parseMessages(res.data);
                //console.log('getVehPos() messages.length: '+messages.length);

		/*set state*/
		setVehPos(messages);
	    }else{
                console.error('getVehPos() res NOT available');
	    }
        } catch (err) {
            console.error('err.message: ' + err.message);
        }
	//console.log('getData() done.');
    };

    useEffect(()=>{
	/*do not wait the interval when component loads the first time*/
	getData();

	/*refresh data periodically*/
	const intervalCall=setInterval(()=>{
	    getData();
	}, 5000);
	/*TODO adjust interval, make it available via config file*/
	return ()=>{
	    /*clean up*/
	    clearInterval(intervalCall);
	};
    },[]);
    return (
	<>
	    <Map messages={vehPos}/>
	</>
    );
}
