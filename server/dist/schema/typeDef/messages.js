"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventResponseEditProfileMessage = exports.LoginResponseMessageType = exports.CreateEventResponseMessage = exports.ChangeResponseMessageType = exports.RegisterResponseMessageType = void 0;
const graphql_1 = require("graphql");
exports.RegisterResponseMessageType = new graphql_1.GraphQLObjectType({
    name: "registerMessage",
    fields: () => ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    })
});
exports.ChangeResponseMessageType = new graphql_1.GraphQLObjectType({
    name: "registerMessage",
    fields: () => ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    })
});
exports.CreateEventResponseMessage = new graphql_1.GraphQLObjectType({
    name: "eventMessage",
    fields: () => ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    })
});
exports.LoginResponseMessageType = new graphql_1.GraphQLObjectType({
    name: "loginMessage",
    fields: () => ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
        type: { type: graphql_1.GraphQLString },
        id: { type: graphql_1.GraphQLID }
    })
});
exports.CreateEventResponseEditProfileMessage = new graphql_1.GraphQLObjectType({
    name: "EditProfileMessage",
    fields: () => ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    })
});
