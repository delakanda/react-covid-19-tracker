import { Dispatch } from "redux";
import makeRequest from "./../service/Axios";
import { TCovidSummaryData } from "../types/CovidTypes";
import { getFetchedAction, getFetchingAction, getFetchErrorAction } from "../redux/actions/DefaultActions";
import { COVID_SUMMARY_SUFFIX } from "../redux/actionTypes/CovidActionTypes";

export function getCovidSummary() {
  const summaryUrl = "";
  // const totalsParams = { format: undefined }
  
  return function(dispatch: Dispatch) {
    dispatch(getFetchingAction(COVID_SUMMARY_SUFFIX));
    makeRequest({
      url: summaryUrl,
      method: "GET"
    }).then((data) => {
      const summaryData = data.summary as TCovidSummaryData;
      dispatch(getFetchedAction((COVID_SUMMARY_SUFFIX), summaryData));
    }).catch((err) => {
      console.log(err);
      dispatch(getFetchErrorAction((COVID_SUMMARY_SUFFIX)));
    })
  }
}