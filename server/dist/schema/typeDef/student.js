"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentType = void 0;
const graphql_1 = require("graphql");
exports.StudentType = new graphql_1.GraphQLObjectType({
    name: "student",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        image: { type: graphql_1.GraphQLString },
        reg_no: { type: graphql_1.GraphQLID },
        f_name: { type: graphql_1.GraphQLString },
        l_name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        batch_no: { type: graphql_1.GraphQLString },
        about: { type: graphql_1.GraphQLString },
        cover_pic: { type: graphql_1.GraphQLString },
        ContactNumber: { type: graphql_1.GraphQLString },
        linkedin: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
        state: { type: graphql_1.GraphQLString },
        projectDis1: { type: graphql_1.GraphQLString },
        project1: { type: graphql_1.GraphQLString },
        projectDis2: { type: graphql_1.GraphQLString },
        project2: { type: graphql_1.GraphQLString },
        projectDis3: { type: graphql_1.GraphQLString },
        project3: { type: graphql_1.GraphQLString },
        skills: { type: graphql_1.GraphQLString }
    })
});
