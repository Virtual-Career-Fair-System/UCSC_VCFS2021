import {GraphQLID, GraphQLString} from "graphql";
import {CreateEventResponseMessage, RegisterResponseMessageType} from "../typeDef/messages";
import path from "path";
import fs from 'fs';
import {isExistEventName} from "../validations/userValidations";
import {event} from "../../entities/event";

const {GraphQLUpload} = require('graphql-upload');

export const CREATE_EVENT = {
  type: CreateEventResponseMessage,
  args: {
    name: {type: GraphQLString},
    startDate: {type: GraphQLString},
    endDate: {type: GraphQLString},
    description: {type: GraphQLString},
    rules: {type: GraphQLString},
    organizer: {type: GraphQLID},
    file: {type: GraphQLUpload},
  },
  async resolve(parent: any, args: any) {
    const {name, startDate, endDate, description, rules, organizer, file} = args;
    const {createReadStream, filename, mimetype, encoding} = await file;
    if (await isExistEventName(name)) {
      return {successful: false, message: 'Event name already exists'}
    }
    const eventCode: string = name + organizer;
    const stream = createReadStream();
    const pathName: any = path.join(__dirname, `../../../../client/src/assets/image/eventCoverPhotos/${filename}`)
    await stream.pipe(fs.createWriteStream(pathName));
    await event.insert({
      name: name,
      cover_image: filename,
      event_code: eventCode,
      start_date: startDate,
      end_date: endDate,
      description: description,
      rules: rules,
      organizer: organizer,
      status: 'requested'
    });
    return {successful: true, message: 'Event Created successfully!'}
  }
}
