import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const CompanyType = new GraphQLObjectType({
  name: "send_email",
  fields: () => ({
    com_id : {type: GraphQLID},
    company_name: {type: GraphQLString},
    stu_email: {type: GraphQLID},
    stu_id: {type: GraphQLID},
    ad_id: {type: GraphQLID},
    subject: {type: GraphQLString},
    meeting: {type: GraphQLString},
  })
});