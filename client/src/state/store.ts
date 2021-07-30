import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export default function configureStore() {
  let persistedState = {};
  return createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}