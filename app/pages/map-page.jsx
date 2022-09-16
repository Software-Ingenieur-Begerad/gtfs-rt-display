import React, {useEffect} from 'react';

import Map from '../components/map/map';
export default function MapPage() {
    useEffect(()=>{
	const intervalCall=setInterval(()=>{
	    console.log('get data');
	}, 30000);
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
