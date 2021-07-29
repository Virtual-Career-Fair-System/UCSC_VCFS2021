import {GraphQLObjectType, GraphQLSchema} from "graphql";
import {CREATE_STUDENT} from "./mutations/student";
import {GET_ALL_Students} from "./queries/company";

const RootQuery =new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        GET_ALL_Students:GET_ALL_Students
    }
});

const Mutation =new GraphQLObjectType({
    name:"Mutation",
    fields:{
     createStudent:CREATE_STUDENT
    }
});

export  const  schema =new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
});