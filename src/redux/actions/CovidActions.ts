import { COUNTRY_SELECT, UPDATE_SUMMARY_DATA } from "../actionTypes/DefaultTypes"
import { ICovidSummaryData } from "../../types/CovidTypes"

export const getCountrySelectionAction = (country: string) => {
  return {
    type: COUNTRY_SELECT,
    data: country
  }
}


export const getUpdateSummaryDataAction = (summaryData: ICovidSummaryData | null) => {
  return {
    type: UPDATE_SUMMARY_DATA,
    data: summaryData
  }
}