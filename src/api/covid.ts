import { Dispatch } from "redux";
import makeRequest from "./../service/Axios";
import { ICovidSummaryData, ICovidCountryData } from "../types/CovidTypes";
import { getFetchedAction, getFetchingAction, getFetchErrorAction } from "../redux/actions/DefaultActions";
import { COVID_SUMMARY_SUFFIX } from "../redux/actionTypes/CovidActionTypes";

export function getCovidSummary() {
  const summaryUrl = "";
  
  return function(dispatch: Dispatch) {
    dispatch(getFetchingAction(COVID_SUMMARY_SUFFIX));
    makeRequest({
      url: summaryUrl,
      method: "GET"
    }).then((data) => {
      // GEt summary data
      const summaryData = data.summary as ICovidSummaryData;

      // get date for last_updated
      let date = new Date(data.generated_on * 1000).toString();

      // Get countries data
      let countriesData: ICovidCountryData[] = [];
      const apiCountriesDataKeys = Object.keys(data.regions);
      apiCountriesDataKeys.forEach((countryKey) => {
        countriesData.push(data.regions[countryKey]);
      });

      countriesData.sort((a,b) => {
        if(a.name > b.name) {
          return 1;
        }

        if(a.name < b.name) {
          return -1;
        }

        return 0;
      });

      const reduxData: object = {
        summary :summaryData,
        covidCountriesData: countriesData,
        lastUpdated: date
      }

      // const 
      dispatch(getFetchedAction((COVID_SUMMARY_SUFFIX), reduxData));
    }).catch((err) => {
      console.log(err);
      dispatch(getFetchErrorAction((COVID_SUMMARY_SUFFIX)));
    })
  }
}