import { TCovidReducer } from "./CovidTypes";

export enum FetchState {
  Fetching = "Fetching",
  Fetched = "Fetched",
  FetchError = "FetchError",
  FetchNeutral = "FetchNeutral"
};

export type TReduxReducers = {
  covidReducer: TCovidReducer;
}

export type TReducerPayload = {
  type: string;
  payload?: any
};