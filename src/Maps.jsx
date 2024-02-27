import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Maps.css';
import { NavLink } from "react-router-dom";

const Maps = (props) => {
  return (
    <div className="bg">
      <NavLink to="/dashboard" className="back-link">👈Back To DashBoard</NavLink><br/>
      <h1 className="maph1" align="center">Chennai</h1>
      <div className="map-container">
        <Map
          google={props.google}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px", // Rounded corners for the map container
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle elevation effect
          }}
          zoom={10}
          initialCenter={{
            lat: 13.082680,
            lng: 80.270721
          }}
        />
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCb1zpu1DcIvijnnYKcyqOIeKSRA_cZBps" // Replace with your actual API key
})(Maps);
