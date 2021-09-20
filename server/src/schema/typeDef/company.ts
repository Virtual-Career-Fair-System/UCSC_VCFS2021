import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const CompanyType = new GraphQLObjectType({
  name: "student",
  fields: () => ({
    com_id : {type: GraphQLID},
    name: {type: GraphQLString},
    email: {type: GraphQLID},
    password: {type: GraphQLString},
    con_no: {type: GraphQLString},
    description: {type: GraphQLString},
    image: {type: GraphQLString},
    date:{type: GraphQLString},
    accept:{type: GraphQLString}
  })
});