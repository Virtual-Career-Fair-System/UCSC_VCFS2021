"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_Students = void 0;
const user_1 = require("../typeDef/user");
const graphql_1 = require("graphql");
const student_1 = require("../../entities/student");
exports.GET_ALL_Students = {
    type: new graphql_1.GraphQLList(user_1.UserType),
    resolve() {
        return student_1.student.find();
    }
};
