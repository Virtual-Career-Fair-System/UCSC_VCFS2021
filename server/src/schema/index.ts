import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CREATE_STUDENT} from "./mutations/student";
import {GET_ALL_Students} from "./queries/company";
import {CREATE_COMPANY} from "./mutations/company";
import {LOGIN} from "./mutations/userLogin";
import {CREATE_EVENT} from "./mutations/organizer";
import {GET_ALL_EVENTS} from "./queries/events";
import {CREATE_EMAIL} from "./mutations/emailj";
import { CREATE_AD } from "./mutations/compublishad";
import { GET_ALL_ADVERTISEMENTS } from "./queries/advertisement";
import { UPDATE_STUDENT } from "./mutations/editstudent";
import { CREATE_CV } from "./mutations/studentcvu";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllEvents: GET_ALL_EVENTS,
    getAllAdvertisements: GET_ALL_ADVERTISEMENTS
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
    createAd: CREATE_AD,
    createCv: CREATE_CV,

    updateStudent: UPDATE_STUDENT
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
