import {UserType} from "../typeDef/user";
import {GraphQLList} from "graphql";
import {student} from "../../entities/student";
import {EventType} from "../typeDef/event";
import {event} from "../../entities/event";

export const GET_ALL_EVENTS = {
  type:new GraphQLList(EventType),
  resolve() {
    return event.find();
  }
}
