import { FetchState } from "./Default";

export type TCovidReducer = {
  fetchState: FetchState;
  covidSummaryData: TCovidSummaryData | null;
  covidCountriesData: TCovidCountryData[];
};

export type TCovidSummaryData = {
  total_cases: number;
  active_cases: number;
  deaths: number;
  recovered: number;
  death_ratio: number;
  recovery_ratio: number;
};

export type TCovidCountryData = {
  country: string;
  latitude: string;
  longitude: string;
  confirmed: number;
  recovered: number;
  critical: number;
  deaths: number;
};