import {UserType} from "../typeDef/user";
import {GraphQLList} from "graphql";
import {student} from "../../entities/student";

export const GET_ALL_Students = {
  type:new GraphQLList(UserType),
  resolve() {
    return student.find();
  }
}