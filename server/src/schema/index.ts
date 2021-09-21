import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CREATE_STUDENT} from "./mutations/student";
import {CREATE_COMPANY} from "./mutations/company";
import {LOGIN} from "./mutations/userLogin";
import {CREATE_EVENT} from "./mutations/organizer";
import {GET_ALL_EVENTS} from "./queries/events";
import {CREATE_EMAIL} from "./mutations/emailj";
import { CREATE_AD } from "./mutations/compublishad";
import { GET_ALL_ADVERTISEMENTS } from "./queries/advertisement";
import { UPDATE_STUDENT } from "./mutations/editstudent";

import { CREATE_CV } from "./mutations/studentcvu";


import {GET_STUDENT} from "./mutations/student";
import {GET_AVAILABLE} from "./mutations/student";
import {GET_ALL_STUDENT} from "./queries/student";
import {GET_ALL_COMPANIES} from "./queries/company";
import {ACCEPT_STUDENT} from "./mutations/student";
import {ACCEPT_COMPANY} from "./mutations/company";

import { GET_CV } from "./queries/cvupload";

import {APPROVE_EVENT} from "./mutations/admin";


const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllEvents: GET_ALL_EVENTS,
    getAllAdvertisements: GET_ALL_ADVERTISEMENTS,
    getAllStudent: GET_ALL_STUDENT,
    getAllCompany: GET_ALL_COMPANIES,
    getCv:GET_CV
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createStudent: CREATE_STUDENT,
    createCompany: CREATE_COMPANY,
    login: LOGIN,
    uploadFile: CREATE_EVENT,
    approveEvent:APPROVE_EVENT,
    createEmail: CREATE_EMAIL,
    createAd: CREATE_AD,
    createCv: CREATE_CV,


    updateStudent: UPDATE_STUDENT,
    getStudent: GET_STUDENT,
    changeAvailable: GET_AVAILABLE,

    acceptStudent: ACCEPT_STUDENT,
    acceptCompany:ACCEPT_COMPANY

  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
