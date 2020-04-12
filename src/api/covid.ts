import { Dispatch } from "redux";
import makeRequest from "./../service/Axios";
import { ICovidSummaryData } from "../types/CovidTypes";
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
      const summaryData = data.summary as ICovidSummaryData;

      const reduxData: object = {
        summary :summaryData
      }
      
      // const 
      console.log(data);
      dispatch(getFetchedAction((COVID_SUMMARY_SUFFIX), reduxData));
    }).catch((err) => {
      console.log(err);
      dispatch(getFetchErrorAction((COVID_SUMMARY_SUFFIX)));
    })
  }
}