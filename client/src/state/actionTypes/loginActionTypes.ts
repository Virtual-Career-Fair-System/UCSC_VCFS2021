import * as ACTIONS from '../constants/actions/loginActionTypes';
import {ILoginData} from "../../types/login";

export interface login {
  type: typeof ACTIONS.LOGIN
  payload: ILoginData
}

export interface logout {
  type: typeof ACTIONS.LOGOUT
  payload: null
}

export type LoginTypes=login|logout;