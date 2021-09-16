import {GraphQLObjectType, GraphQLID, GraphQLString,GraphQLBoolean} from "graphql";

export const RegisterResponseMessageType = new GraphQLObjectType({
  name: "registerMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})

export const ChangeResponseMessageType = new GraphQLObjectType({
  name: "registerMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})


export const CreateEventResponseMessage = new GraphQLObjectType({
  name: "eventMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})

export const LoginResponseMessageType = new GraphQLObjectType({
  name: "loginMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
    type:{type:GraphQLString},
    id:{type:GraphQLID}
  })
})
<<<<<<< HEAD
=======

export const CreateEventResponseEditProfileMessage = new GraphQLObjectType({
  name: "EditProfileMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})
>>>>>>> e8bbe3a3f1f860cb4ed0c2dbf370107c5926e60f
