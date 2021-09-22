"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementType = void 0;
const graphql_1 = require("graphql");
exports.AdvertisementType = new graphql_1.GraphQLObjectType({
    name: "advertisement",
    fields: () => ({
        ad_id: { type: graphql_1.GraphQLID },
        eventId: { type: graphql_1.GraphQLInt },
        companyComId: { type: graphql_1.GraphQLInt },
        com_name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
        event_code: { type: graphql_1.GraphQLString },
    })
});
