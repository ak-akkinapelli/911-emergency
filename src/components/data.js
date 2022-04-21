import { useState } from 'react';
import '../App.css';
import FetchLocation from "./location-access";
function Data() {
  const [LocDetails, setLocation] = useState({latitude: null, longitude:null})
 
  const locationDetails = () =>
  {
      setLocation()
  }

  return (
    <div>
      <FetchLocation locationDetails= {locationDetails}/>
      <div>
        <h3>Here are nearby places</h3>
      </div>
      <section>
        <div className="card">
          <ul className="container">
            <h4>Nearby Hospitals</h4>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="card">
          <ul className="container">
            <h4>Nearby ATMs</h4>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Data;
