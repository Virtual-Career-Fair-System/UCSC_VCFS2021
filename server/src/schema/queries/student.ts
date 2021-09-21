import {UserType} from "../typeDef/user";
import {GraphQLID, GraphQLInt, GraphQLList} from "graphql";
import {student} from "../../entities/student";
import {EventType} from "../typeDef/event";
import {event} from "../../entities/event";
import { StudentType } from "../typeDef/student";

export const GET_STUDENT = {
  type:StudentType,
  args: {
    id: {type: GraphQLInt}
 
  },

  async resolve(parent: any, args: any) {
    const {id} = args;
    return student.findOne({id:id});
  }
}


  export const GET_ALL_STUDENT = {
    type:new GraphQLList(StudentType),
    resolve() {
      return student.find();
    }
  }
  