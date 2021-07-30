import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean} from "graphql";

export const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: {type: GraphQLID},
    type: {type: GraphQLString},
    email: {type: GraphQLString},
  })
})
