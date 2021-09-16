"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const student_1 = require("./mutations/student");
const company_1 = require("./mutations/company");
const userLogin_1 = require("./mutations/userLogin");
const organizer_1 = require("./mutations/organizer");
const events_1 = require("./queries/events");
const advertisement_1 = require("./queries/advertisement");
const editstudent_1 = require("./mutations/editstudent");
const student_2 = require("./queries/student");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllEvents: events_1.GET_ALL_EVENTS,
        getAllAdvertisements: advertisement_1.GET_ALL_ADVERTISEMENTS,
        getStudent: student_2.GET_STUDENT
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createStudent: student_1.CREATE_STUDENT,
        createCompany: company_1.CREATE_COMPANY,
        login: userLogin_1.LOGIN,
        uploadFile: organizer_1.CREATE_EVENT,
        updateStudent: editstudent_1.UPDATE_STUDENT
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
