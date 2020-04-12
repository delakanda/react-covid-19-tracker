import React, { useCallback } from "react";
import "./InfoPane.css";
import { useSelector, useDispatch } from "react-redux";
import { TReduxReducers, FetchState } from "../../types/Default";
import { replaceUnderscores } from "../../utils/StringUtil";
import { ICovidSummaryData } from "../../types/CovidTypes";
import { getUpdateSummaryDataAction, getCountrySelectionAction } from "../../redux/actions/CovidActions";
import CovidTable from "../covidTable/CovidTable";

function InfoPane() {

  const dispatch = useDispatch();
  const { 
    countrySelection, 
    immutableCovidSummaryData,
    covidSummaryData, 
    covidCountriesData, 
    fetchState, 
    lastUpdated 
  } = useSelector((state: TReduxReducers) => state.covidReducer);

  const setCountry = useCallback((country: string) => {

    // get summary for selected country
    let countrySummaryData = covidCountriesData.find((countryData) => {
      return countryData.name === country;
    })

    console.log(country, countrySummaryData);

    let data: ICovidSummaryData | null;
    if(countrySummaryData) {
      data = {
        active_cases: countrySummaryData.active_cases,
        death_ratio: countrySummaryData.death_ratio,
        recovered: countrySummaryData.recovered,
        deaths: countrySummaryData.deaths,
        recovery_ratio: countrySummaryData.recovery_ratio,
        total_cases: countrySummaryData.total_cases
      }
    } else {
      data = immutableCovidSummaryData;
    }

    dispatch(getUpdateSummaryDataAction(data));
    dispatch(getCountrySelectionAction(country));
  }, [dispatch, covidCountriesData, immutableCovidSummaryData]);

  return (
    <React.Fragment>
      <div id="selector-wrapper">
        <select 
          data-testid="country-selector" 
          id="country-selector" 
          className="form-control" 
          value={countrySelection}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)}>

          <option value={""}>ALL COUNTRIES</option>
          {covidCountriesData.map((data, idx) => {
            return (
              <option key={idx} value={data.name}>{replaceUnderscores(data.name)?.toUpperCase()}</option>
            )
          })}
        </select>

        <div className="p-3">
          {fetchState === FetchState.Fetching && 
            <div>Loading...</div>
          }
          {fetchState === FetchState.Fetched &&
            <React.Fragment>
              <CovidTable covidSummaryData={covidSummaryData} />

              <div className="mt-3">
                <small><strong>Last Updated:</strong> <br/> {lastUpdated}</small>
              </div>
            </React.Fragment>
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export default InfoPane;
