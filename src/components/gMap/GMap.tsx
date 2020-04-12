import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./GMap.css";
import { GOOGLE_API_KEY } from "../../utils/GMap_Env";

function GMap(props: any) {

  return (
    <div data-testid="google-map" id="google-map">
      <Map google={props.google} zoom={3} mapTypeControl={false} initialCenter={{lat: 6.735496, lng: -0.012123}}>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(GMap)

// export default GMap;