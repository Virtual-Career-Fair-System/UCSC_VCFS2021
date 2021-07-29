import {GraphQLObjectType, GraphQLID, GraphQLString,GraphQLBoolean} from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "message",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})