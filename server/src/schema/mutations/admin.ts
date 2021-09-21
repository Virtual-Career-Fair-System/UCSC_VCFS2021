import {CreateEventResponseMessage} from "../typeDef/messages";
import {GraphQLID, GraphQLString} from "graphql";
import {GraphQLUpload} from "graphql-upload";
import {event} from "../../entities/event";

export const APPROVE_EVENT = {
  type: CreateEventResponseMessage,
  args: {
    event_id: {type: GraphQLID},
  },
  async resolve(parent: any, args: any) {
    const {event_id} = args;
    await event.update({id: event_id}, {status: "upcoming"});
    return {successful: true, message: 'Event approved!'}
  }
}