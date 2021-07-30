import * as ACTIONS from '../constants/actions/loginActionTypes';
import {ILoginData} from "../../types/login";

export function login(data: ILoginData): any {
  return {
    type: ACTIONS.LOGIN,
    payload: data
  }
}

export function logout(): any {
  return {
    type: ACTIONS.LOGOUT,
    payload: null
  }
}