import {GraphQLString} from "graphql";
import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {RegisterResponseMessageType} from "../typeDef/messages";
import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";

export const CREATE_STUDENT = {
  type: RegisterResponseMessageType,
  args: {
    fname: {type: GraphQLString},
    lname: {type: GraphQLString},
    email: {type: GraphQLString},
    regNo: {type: GraphQLString},
    password: {type: GraphQLString}
  },

  async resolve(parent: any, args: any) {
    const {fname, lname, email, regNo, password} = args;

    if(await isExistEmail(email)){
      return{successful:false,message:'Email already taken'}
    }

    if(await isExistRegNo(regNo)){
      return{successful:false,message:'Registration number already taken'}
    }

    const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
    const x:any=await user.insert({type:'student',email:email});
    await student.insert({id:x.raw.insertId,f_name:fname, l_name:lname, password:PasswordSh1,reg_no:regNo,email:email});
    return{successful:true,message:'Registered successfully!'}
  }
}