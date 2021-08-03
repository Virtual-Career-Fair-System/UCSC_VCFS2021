import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CREATE_STUDENT} from "./mutations/student";
import {GET_ALL_Students} from "./queries/company";
import {CREATE_COMPANY} from "./mutations/company";
import {LOGIN} from "./mutations/userLogin";
import {CREATE_EVENT} from "./mutations/organizer";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    GET_ALL_Students: GET_ALL_Students
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStudent: CREATE_STUDENT,
    createCompany: CREATE_COMPANY,
    login: LOGIN,
    uploadFile: CREATE_EVENT
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})