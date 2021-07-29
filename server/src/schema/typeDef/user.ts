import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: {type: GraphQLID},
    type: {type: GraphQLString},
  })
})