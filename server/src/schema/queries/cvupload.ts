// import {UserType} from "../typeDef/user";
import {GraphQLList} from "graphql";
// import {student} from "../../entities/student";
import {CvType} from "../typeDef/cvupload";
// import {event} from "../../entities/event";
import { cvupload } from "../../entities/cvupload";

export const GET_CV = {
  type:new GraphQLList(CvType),
  resolve() {
    return cvupload.find();
  }
}