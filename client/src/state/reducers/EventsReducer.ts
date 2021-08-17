import * as ACTIONS from '../constants/actions/EventsActionTypes';
import {EventTypes} from "../actionTypes/eventsCtionTypes";
import {IEventState} from "../../types/login";

const EventInitialState: any = {
  events: [],
};

export function EventsReducer(state = EventInitialState, action:EventTypes ): IEventState {
  switch (action.type) {
    case ACTIONS.CREATE_EVENT:
      return {
        ...state,
        events: [...state.items, action.payload]
      };
    case ACTIONS.SET_INIT_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    default: {
      return state;
    }
  }
}
