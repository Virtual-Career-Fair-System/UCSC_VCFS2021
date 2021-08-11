import {combineReducers} from "redux";
import {loginReducer} from "./LoginReducer";
import {EventReducer} from "./EventReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  events:EventReducer
});

export type AppState = ReturnType<typeof rootReducer>
