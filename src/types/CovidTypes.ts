import { FetchState } from "./Default";

export type TCovidReducer = {
  countrySelection: string;
  fetchState: FetchState;
  immutableCovidSummaryData: ICovidSummaryData | null;
  covidSummaryData: ICovidSummaryData | null;
  covidCountriesData: ICovidCountryData[];
  lastUpdated: string | null;
};

export interface ICovidSummaryData {
  total_cases: number;
  active_cases: number;
  deaths: number;
  recovered: number;
  death_ratio: number;
  recovery_ratio: number;
};

export interface ICovidCountryData extends ICovidSummaryData {
  name: string;
};