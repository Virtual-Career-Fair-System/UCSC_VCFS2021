"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileType = exports.EventType = void 0;
const graphql_1 = require("graphql");
exports.EventType = new graphql_1.GraphQLObjectType({
    name: "event",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        event_code: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        organizer: { type: graphql_1.GraphQLInt },
        cover_image: { type: graphql_1.GraphQLString },
        rules: { type: graphql_1.GraphQLString },
        start_date: { type: graphql_1.GraphQLString },
        end_date: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
    })
});
exports.FileType = new graphql_1.GraphQLObjectType({
    name: "file",
    fields: () => ({
        fileName: { type: graphql_1.GraphQLString },
        mimeType: { type: graphql_1.GraphQLString },
        encoding: { type: graphql_1.GraphQLString },
    })
});
