import {GraphQLString} from "graphql";
// import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {CreateEmailResponseMessage} from "../typeDef/messages";
// import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";
import {send_email} from "../../entities/send_email";
import { Subject } from "typeorm/persistence/Subject";


export const CREATE_EMAIL = {
  type: CreateEmailResponseMessage,
  args: {
    c_name: {type: GraphQLString},
    s_email: {type: GraphQLString},
    subject: {type: GraphQLString},
    timea: {type: GraphQLString},
    linka: {type: GraphQLString}
    // subject, meeting link

    
  },

  async resolve(parent: any, args: any) {
    const {c_name, s_email,subject,timea, linka} = args;
    
    await send_email.insert({company_name: c_name, stu_email: s_email, subject: subject, timea: timea, linka: linka });
    return {successful: true, message: 'successfully Inserted!'}
  }
}