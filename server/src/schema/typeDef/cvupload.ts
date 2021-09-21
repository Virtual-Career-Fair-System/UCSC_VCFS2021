import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const CvType = new GraphQLObjectType({
  name: "cvupload",
  fields: () => ({
    cv_id : {type: GraphQLID},
    studentId: {type: GraphQLID},
    advertisementAdId : {type: GraphQLID},
    cv_path1: {type: GraphQLString},
   
  })
});