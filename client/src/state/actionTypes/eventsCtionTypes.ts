import * as ACTIONS from '../constants/actions/EventsActionTypes';
import {IEvent, ILoginData} from "../../types/login";

export interface createEvent {
  type: typeof ACTIONS.CREATE_EVENT
  payload: IEvent
}
export interface setInitEvents {
  type: typeof ACTIONS.SET_INIT_EVENTS
  payload: IEvent
}

export interface changeEvent {
  type: typeof ACTIONS.CHANGE_EVENT
  payload: string|number
}


export type EventTypes=createEvent|setInitEvents|changeEvent;
