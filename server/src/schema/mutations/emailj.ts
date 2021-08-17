import {GraphQLString} from "graphql";
// import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {CreateEmailResponseMessage} from "../typeDef/messages";
// import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";
import {send_email} from "../../entities/send_email";

export const CREATE_EMAIL = {
  type: CreateEmailResponseMessage,
  args: {
    c_name: {type: GraphQLString},
    s_email: {type: GraphQLString},
    
  },

  async resolve(parent: any, args: any) {
    const {com_id, name, email, stu_id, ad_id, subject, meeting} = args;
    
    await send_email.insert({com_id: com_id, company_name: name, stu_email: email, stu_id: stu_id, ad_id: ad_id, subject: subject, meeting: meeting});
    return {successful: true, message: 'successfully Inserted!'}
  }
}