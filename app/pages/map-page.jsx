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
            const url = 'https://data.bus-data.dft.gov.uk/api/v1/gtfsrtdatafeed/?boundingBox=51.401,51.509,0.01,0.201&routeId=45,26';
	    const usr = 'stefan2';
	    const ky = 'f5e9ef10f43095ce597cfa4b5c3b742475984b68';
	    const config = {
		// Axios looks for the `auth` option, and, if it is set, formats a
		// basic auth header for you automatically.
		auth: {
		    username: `${usr}`,
		    password: `${ky}`
		},
		responseType: 'arraybuffer'
		//responseType: 'blob'
	    };
        const res = await axios.get(url,config);
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
