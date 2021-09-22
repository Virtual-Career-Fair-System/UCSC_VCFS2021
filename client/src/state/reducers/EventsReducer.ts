import * as ACTIONS from '../constants/actions/EventsActionTypes';
import {EventTypes} from "../actionTypes/eventsCtionTypes";
import {IEvent, IEventState} from "../../types/login";
import {CHANGE_EVENT} from "../constants/actions/EventsActionTypes";

const EventInitialState: any = {
  events: [],
};

export function EventsReducer(state = EventInitialState, action: EventTypes): IEventState {
  switch (action.type) {
    case ACTIONS.CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload]
      };

    case ACTIONS.SET_INIT_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case ACTIONS.CHANGE_EVENT:
      return {
        ...state,
        events: state.events.map((event:IEvent)=>{
          return (event.id==action.payload ? {...event,status:'upcoming'}:event)
        })
      };
    default: {
      return state;
    }
  }
}
