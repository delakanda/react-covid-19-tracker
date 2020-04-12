export const FETCHING = "FETCHING_";
export const FETCHED = "FETCHED_";
export const FETCH_ERROR = "FETCHING_";
export const COUNTRY_SELECT = "COUNTRY_SELECT";
export const UPDATE_SUMMARY_DATA = "UPDATE_SUMMARY_DATA";

export const getFetchingActionType = (type: string) => {
  return `${FETCHING}${type}`;
}

export const getFetchedActionType = (type: string) => {
  return `${FETCHED}${type}`;
}

export const getFetchErrorActionType = (type: string) => {
  return `${FETCH_ERROR}${type}`;
}