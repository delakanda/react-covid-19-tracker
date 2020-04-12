import { createStore, applyMiddleware } from "redux";
import RootReducer from "./../reducers/Index";
import rThunk from "redux-thunk";

const store = createStore(
  RootReducer,
  applyMiddleware(rThunk)
);

export default store;