import { getFetchingActionType, getFetchedActionType, getFetchErrorActionType, COUNTRY_SELECT, UPDATE_SUMMARY_DATA } from "../actionTypes/DefaultTypes";
import { FetchState, TReducerPayload } from "../../types/Default";
import { TCovidReducer } from "../../types/CovidTypes";
import { COVID_SUMMARY_SUFFIX } from "../actionTypes/CovidActionTypes";

const initialState: TCovidReducer = {
  countrySelection: "",
  fetchState: FetchState.FetchNeutral,
  immutableCovidSummaryData: null,
  covidSummaryData: null,
  covidCountriesData: [],
  lastUpdated: null
}

export default function covidData(state=initialState, payload: TReducerPayload) {
  switch (payload.type) {
    case getFetchingActionType(COVID_SUMMARY_SUFFIX):
      return {...state, fetchState: FetchState.Fetching}
    case getFetchedActionType(COVID_SUMMARY_SUFFIX):
      return {
        ...state, 
        fetchState: FetchState.Fetched, 
        covidSummaryData: payload.data.summary,
        immutableCovidSummaryData: payload.data.summary,
        covidCountriesData: payload.data.covidCountriesData,
        lastUpdated: payload.data.lastUpdated
      }
    case getFetchErrorActionType(COVID_SUMMARY_SUFFIX):
      return {...state, fetchState: FetchState.FetchError}
    case UPDATE_SUMMARY_DATA:
      return {...state, covidSummaryData: payload.data}
    case COUNTRY_SELECT:
      return {...state, countrySelection: payload.data || ""}
    default:
      return {...state};
  }
}