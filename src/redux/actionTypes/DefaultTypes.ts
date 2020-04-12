export const FETCHING = "FETCHING_";
export const FETCHED = "FETCHED_";
export const FETCH_ERROR = "FETCHING_";

export const getFetchingActionType = (type: string) => {
  console.log(type);
  return `${FETCHING}${type}`;
}

export const getFetchedActionType = (type: string) => {
  return `${FETCHED}${type}`;
}

export const getFetchErrorActionType = (type: string) => {
  return `${FETCH_ERROR}${type}`;
}