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
            let url = 'https://soll.vbn.de/vehicle-positions';
            //let url = 'http://localhost:8080/vehicle-positions';
            const res = await axios.get(url,
					{
					    responseType: 'arraybuffer'
					    //responseType: 'blob'
					});
	    //TODO remove debugging
            if(res.data){
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
	const intervalCall=setInterval(()=>{
	    getData();
	}, 5000);
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
