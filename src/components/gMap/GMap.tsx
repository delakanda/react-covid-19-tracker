import React, { useState, useEffect } from "react";
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import "./GMap.css";
import { GOOGLE_API_KEY } from "../../utils/GMap_Env";
import { useSelector } from "react-redux";
import { TReduxReducers } from "../../types/Default";
import { replaceUnderscores } from "../../utils/StringUtil";
import CovidTable from "../covidTable/CovidTable";

const DEFAULT_ZOOM: number = 3;
const SELECTED_ZOOM: number = 6;

function GMap(props: any) {

  const { 
    countrySelection,
    covidSummaryData
  } = useSelector((state: TReduxReducers) => state.covidReducer);

  const [centerLoc, setCenterLoc] = useState(undefined);
  const [zoom, setZoom] = useState<number>(DEFAULT_ZOOM);
  const [infoWindowVisible, setInfoWindowVisible] = useState<boolean>(false);

  useEffect(() => {
    if(countrySelection) {
      const geocoder = new props.google.maps.Geocoder();
      geocoder.geocode( {'address' : replaceUnderscores(countrySelection)}, function(results: any, status: any) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results[0]);
          setCenterLoc(results[0].geometry.location);
          setZoom(SELECTED_ZOOM);
          setInfoWindowVisible(true);
        } else {
          setCenterLoc(undefined);
          setZoom(DEFAULT_ZOOM);
          setInfoWindowVisible(false);
        }
      });
    } else {
      setCenterLoc(undefined);
      setZoom(DEFAULT_ZOOM);
      setInfoWindowVisible(false);
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

            {/* {countrySelection &&
              <Marker
                title={replaceUnderscores(countrySelection)?.toLocaleUpperCase()}
                name={countrySelection}
                position={centerLoc} />
            } */}

          <InfoWindow visible={infoWindowVisible} position={centerLoc}>
            <div>
              <div className="mb-3">
                <strong className="font-weight-bolder">
                  {replaceUnderscores(countrySelection)?.toLocaleUpperCase()}
                </strong>
              </div>
              <CovidTable covidSummaryData={covidSummaryData} />
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