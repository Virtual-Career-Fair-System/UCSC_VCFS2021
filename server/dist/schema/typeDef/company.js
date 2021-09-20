"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyType = void 0;
const graphql_1 = require("graphql");
exports.CompanyType = new graphql_1.GraphQLObjectType({
    name: "student",
    fields: () => ({
        com_id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLID },
        password: { type: graphql_1.GraphQLString },
        con_no: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
    })
});
