import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

export const AdvertisementType = new GraphQLObjectType({
  name: "advertisement",
  fields: () => ({
    ad_id : {type: GraphQLID},
    eventId: {type: GraphQLInt},
    companyComId: {type: GraphQLInt},
    com_name: {type: GraphQLString},
    description: {type: GraphQLString},
    image: {type: GraphQLString},
    status: {type: GraphQLString},
    event_code: {type: GraphQLString},
    category: {type: GraphQLString},
  })
});