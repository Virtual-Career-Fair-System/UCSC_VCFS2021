import {combineReducers} from "redux";
import {loginReducer} from "./LoginReducer";
import {EventsReducer} from "./EventsReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  events:EventsReducer
});

export type AppState = ReturnType<typeof rootReducer>
