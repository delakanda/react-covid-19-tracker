import React, { useState, useEffect } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import "./GMap.css";
import { GOOGLE_API_KEY } from "../../utils/GMap_Env";
import { useSelector } from "react-redux";
import { TReduxReducers } from "../../types/Default";
import { replaceUnderscores } from "../../utils/StringUtil";

function GMap(props: any) {

  const { 
    countrySelection
  } = useSelector((state: TReduxReducers) => state.covidReducer);

  const [centerLoc, setCenterLoc] = useState(undefined);
  const [zoom, setZoom] = useState<number>(3);
  const [activeMarker, setActiveMarker] = useState({});

  useEffect(() => {
    if(countrySelection) {
      const geocoder = new props.google.maps.Geocoder();
      geocoder.geocode( {'address' : replaceUnderscores(countrySelection)}, function(results: any, status: any) {
        if (status == google.maps.GeocoderStatus.OK) {
          console.log(results[0]);
          setCenterLoc(results[0].geometry.location);
          setZoom(6);
        } else {
          setCenterLoc(undefined);
          setZoom(3);
        }
      });
    } else {
      setCenterLoc(undefined);
      setZoom(3);
    }
  }, [countrySelection, props.google.maps]);

  return (
    <div data-testid="google-map" id="google-map">
      <Map 
        google={props.google} 
        zoom={zoom} 
        mapTypeControl={false} 
        initialCenter={{lat: 6.735496, lng: -0.012123}}
        center={centerLoc || {lat: 6.735496, lng: -0.012123}}>

            <InfoWindow>
              <div>
                <h1>HERE</h1>
              </div>
            </InfoWindow>
        
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API_KEY)
})(GMap)

// export default GMap;