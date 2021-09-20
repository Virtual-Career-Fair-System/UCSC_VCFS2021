import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const CvType = new GraphQLObjectType({
  name: "advertisement",
  fields: () => ({
    cv_id : {type: GraphQLID},
    s_name: {type: GraphQLString},
    s_email: {type: GraphQLString},
    cv_path1: {type: GraphQLString},
   
  })
});