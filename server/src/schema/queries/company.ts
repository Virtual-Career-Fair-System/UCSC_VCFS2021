import {UserType} from "../typeDef/user";
import {GraphQLList} from "graphql";
import {student} from "../../entities/student";
import { CompanyType } from "../typeDef/company";
import { company } from "../../entities/company";

export const GET_ALL_Students = {
  type:new GraphQLList(UserType),
  resolve() {
    return student.find();
  }
}

export const GET_ALL_COMPANY = {
  type:new GraphQLList(CompanyType),
  resolve() {
    return company.find();
  }
}