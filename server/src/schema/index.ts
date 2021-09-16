import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CREATE_STUDENT} from "./mutations/student";
import {GET_ALL_Students} from "./queries/company";
import {CREATE_COMPANY} from "./mutations/company";
import {LOGIN} from "./mutations/userLogin";
import {CREATE_EVENT} from "./mutations/organizer";
import {GET_ALL_EVENTS} from "./queries/events";
import {CREATE_EMAIL} from "./mutations/emailj";
import { CREATE_AD } from "./mutations/compublishad";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllEvents: GET_ALL_EVENTS
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStudent: CREATE_STUDENT,
    createCompany: CREATE_COMPANY,
    login: LOGIN,
    uploadFile: CREATE_EVENT,
    createEmail: CREATE_EMAIL,
    createAd: CREATE_AD

  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
