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


export type EventTypes=createEvent|setInitEvents;
