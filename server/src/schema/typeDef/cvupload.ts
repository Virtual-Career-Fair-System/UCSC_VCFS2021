import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

export const CvType = new GraphQLObjectType({
  name: "cvupload",
  fields: () => ({
    cv_id : {type: GraphQLID},
    studentId: {type: GraphQLID},
    advertisementAdId : {type: GraphQLID},
    cv_path1: {type: GraphQLString},
  })
});

export const getCVType = new GraphQLObjectType({
  name: "getCVType",
  fields: () => ({
    cv_id : {type: GraphQLID},
    id: {type: GraphQLID},
    cv_path1: {type: GraphQLString},
    image:{type: GraphQLString},
    email:{type: GraphQLString},
    f_name:{type: GraphQLString},
    l_name:{type: GraphQLString},
    available:{type: GraphQLInt},
    status:{type: GraphQLString},
  })
});
