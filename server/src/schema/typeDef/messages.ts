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

export const CreateEmailResponseMessage = new GraphQLObjectType({
  name: "emailMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})

export const CreateAdResponseMessage = new GraphQLObjectType({
  name: "publishadMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})
export const CreateEventResponseEditProfileMessage = new GraphQLObjectType({
  name: "EditProfileMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})

export const CreateCvResponseMessage = new GraphQLObjectType({
  name: "publishcvMessage",
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
  })
})