import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLInt} from "graphql";

export const EventType = new GraphQLObjectType({
  name: "event",
  fields: () => ({
    id : {type: GraphQLID},
    name: {type: GraphQLString},
    event_code: {type: GraphQLString},
    description: {type: GraphQLString},
    organizer: {type: GraphQLInt},
    cover_image: {type: GraphQLString},
    rules: {type: GraphQLString},
    start_date: {type: GraphQLString},
    end_date: {type: GraphQLString},
    status: {type: GraphQLString},
  })
});

export const FileType = new GraphQLObjectType({
  name: "file",
  fields: () => ({
    fileName : {type: GraphQLString},
    mimeType: {type: GraphQLString},
    encoding: {type: GraphQLString},
  })
});