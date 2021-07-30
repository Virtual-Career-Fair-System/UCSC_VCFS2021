import {combineReducers} from "redux";
import {loginReducer} from "./LoginReducer";

export const rootReducer = combineReducers({
  login: loginReducer
});

export type AppState = ReturnType<typeof rootReducer>