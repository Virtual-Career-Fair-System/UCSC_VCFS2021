import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const StudentType = new GraphQLObjectType({
  name: "student",
  fields: () => ({
    id: {type: GraphQLID},
    image: {type: GraphQLString},
    reg_no: {type: GraphQLID},
    f_name: {type: GraphQLString},
    l_name: {type: GraphQLString},
    email: {type: GraphQLString},
    batch_no: {type: GraphQLString},
    about: {type: GraphQLString},
  })
});