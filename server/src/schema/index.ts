import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CREATE_STUDENT} from "./mutations/student";
import {CREATE_COMPANY} from "./mutations/company";
import {LOGIN} from "./mutations/userLogin";
import {CREATE_EVENT} from "./mutations/organizer";
import {GET_ALL_EVENTS} from "./queries/events";
import {GET_ALL_ADVERTISEMENTS} from "./queries/advertisement";
import { UPDATE_STUDENT } from "./mutations/editstudent";
import {GET_STUDENT} from "./mutations/student";
import {GET_AVAILABLE} from "./mutations/student";
import { GET_ALL_STUDENT } from "./queries/student";
import {GET_ALL_COMPANIES} from "./queries/company";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllEvents: GET_ALL_EVENTS,
    getAllAdvertisements: GET_ALL_ADVERTISEMENTS,
    getAllStudent:GET_ALL_STUDENT,
    getAllCompany:GET_ALL_COMPANIES
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStudent: CREATE_STUDENT,
    createCompany: CREATE_COMPANY,
    login: LOGIN,
    uploadFile: CREATE_EVENT,
    updateStudent: UPDATE_STUDENT,
    getStudent:GET_STUDENT,
    changeAvailable:GET_AVAILABLE
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
