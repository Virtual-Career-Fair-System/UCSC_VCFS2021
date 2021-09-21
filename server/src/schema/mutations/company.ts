import {GraphQLID, GraphQLString} from "graphql";
import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {CreateEventResponseEditProfileMessage, RegisterResponseMessageType} from "../typeDef/messages";
import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";
import {company} from "../../entities/company";

export const CREATE_COMPANY = {
  type: RegisterResponseMessageType,
  args: {
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  },

  async resolve(parent: any, args: any) {
    const {name, email, password} = args;
    if (await isExistEmail(email)) {
      return {successful: false, message: 'Email already taken'}
    }

    const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
    const x: any = await user.insert({type: 'company', email: email});
    await company.insert({com_id: x.raw.insertId, com_name: name, password: PasswordSh1, email: email});
    return {successful: true, message: 'Registered successfully!'}
  }
}

export const ACCEPT_COMPANY = {
  type: CreateEventResponseEditProfileMessage,

  args: {
    com_id: {type: GraphQLID},
    accept: {type: GraphQLString}
  },

  async resolve(parent: any, args: any) {
    const {com_id, accept} = args;

    await company.update({com_id: com_id}, {
      accept: accept
    });
    return {successful: true, message:'Student '+accept+'ed!'}
  }
}
