import * as ACTIONS from '../constants/actions/EventsActionTypes';
import {IEvent} from "../../types/login";

export function createEvent(data: IEvent): any {
  return {
    type: ACTIONS.CREATE_EVENT,
    payload: data
  }
}
export function setInitEvents(data: IEvent[]): any {
  return {
    type: ACTIONS.SET_INIT_EVENTS,
    payload: data
  }
}
