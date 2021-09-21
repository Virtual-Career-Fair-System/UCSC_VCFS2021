import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

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
    cover_pic: {type: GraphQLString},
    ContactNumber: {type: GraphQLString},
    linkedin: {type: GraphQLString},
    address: {type: GraphQLString},
    state: {type: GraphQLString},
    projectDis1: {type: GraphQLString},
    project1: {type: GraphQLString},
    projectDis2: {type: GraphQLString},
    project2: {type: GraphQLString},
    projectDis3: {type: GraphQLString},
    project3: {type: GraphQLString},
    skills: {type: GraphQLString},
    available:{type: GraphQLInt},
    date:{type: GraphQLString},
    accept:{type: GraphQLString}
  })
});