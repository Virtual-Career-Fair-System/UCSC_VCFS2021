import {GraphQLList} from "graphql";
import { CompanyType } from "../typeDef/company";
import { company } from "../../entities/company";

export const GET_ALL_COMPANIES = {
  type:new GraphQLList(CompanyType),
  resolve() {
    return company.find();
  }
}