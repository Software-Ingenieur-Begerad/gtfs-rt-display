import React, {useEffect} from 'react';
import axios from 'axios';

import Map from '../components/map/map';

export default function MapPage() {
    const getData= async ()=>{
	console.log('getData() start...');
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
                console.log('getVehPos() res available');
	    }else{
                console.log('getVehPos() res NOT available');
	    }
        } catch (err) {
            console.error('err.message: ' + err.message);
        }
	console.log('getData() done.');
    };
    useEffect(()=>{
	const intervalCall=setInterval(()=>{
	    console.log('Map: get data');
	    getData();
	}, 5000);
	return ()=>{
	    /*clean up*/
	    clearInterval(intervalCall);
	};
    },[]);
    return (
	<>
	    {/*TODO remove debugging*/}
	    <h1>MapPage</h1>
	    <Map />
	</>
    );
}
