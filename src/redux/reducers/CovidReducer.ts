import { getFetchingActionType, getFetchedActionType, getFetchErrorActionType } from "../actionTypes/DefaultTypes";
import { FetchState, TReducerPayload } from "../../types/Default";
import { TCovidReducer } from "../../types/CovidTypes";
import { COVID_SUMMARY_SUFFIX } from "../actionTypes/CovidActionTypes";

const initialState: TCovidReducer = {
  fetchState: FetchState.FetchNeutral,
  covidSummaryData: null,
  covidCountriesData: []
}

export default function covidData(state=initialState, payload: TReducerPayload) {
  switch (payload.type) {
    case getFetchingActionType(COVID_SUMMARY_SUFFIX):
      return {...state, fetchState: FetchState.Fetching}
    case getFetchedActionType(COVID_SUMMARY_SUFFIX):
      return {...state, fetchState: FetchState.Fetched, covidSummaryData: payload.payload}
    case getFetchErrorActionType(COVID_SUMMARY_SUFFIX):
      return {...state, fetchState: FetchState.FetchError}
    default:
      return {...state};
  }
}