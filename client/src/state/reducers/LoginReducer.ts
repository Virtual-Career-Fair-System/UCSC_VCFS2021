import * as ACTIONS from '../constants/actions/loginActionTypes';
import {LoginTypes} from "../actionTypes/loginActionTypes";
import {ILoginState} from "../../types/login";

const LoginInitialState: any = {
  login: {id: null, type: 'unknown'},
};

export function loginReducer(state = LoginInitialState, action: LoginTypes): ILoginState {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        login: {id:action.payload.id,type:action.payload.type}
      };

    case ACTIONS.LOGOUT:
      return {
        ...state,
        login: {id:null,type:'unknown'}
      };
    default: {
      return state;
    }
  }
}