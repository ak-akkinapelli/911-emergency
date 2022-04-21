import { useEffect, useState} from 'react'
import '../App.css'
 function FetchLocation({locationDetails}) {

    const [lat, setLat] = useState(null);
    const [long,setLong] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        locationDetails([lat,long])

        return (null) 
        
    });
});
 }
 
export default FetchLocation;
 