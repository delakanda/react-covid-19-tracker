import { 
  getFetchErrorActionType, 
  getFetchingActionType, 
  getFetchedActionType,
} from "../actionTypes/DefaultTypes";
import { TReducerPayload } from "../../types/Default";

export const getFetchingAction = (type: string): TReducerPayload => {
  return {
    type: getFetchingActionType(type)
  };
}

export const getFetchedAction = (type: string, data: any): TReducerPayload => {
  return {
    type: getFetchedActionType(type),
    data
  };
}

export const getFetchErrorAction = (type: string): TReducerPayload => {
  return {
    type: getFetchErrorActionType(type)
  };
}