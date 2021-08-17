import {GraphQLString} from "graphql";
import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {LoginResponseMessageType} from "../typeDef/messages";
import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";
import {company} from "../../entities/company";

export const LOGIN = {
  type: LoginResponseMessageType,
  args: {
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  },

  async resolve(parent: any, args: any) {
    const {email, password} = args;

    if(!await isExistEmail(email)){
      return{successful:false,message:"Couldn't find your account",type:'',id:null}
    }
    const PasswordSh1 = crypto.createHash('md5').update(password).digest('hex');
    const tempUser:any= await user.findOne({email: email});

    if(tempUser?.type=='student'){
      const tempStudent:any= await student.findOne({email: email});
      if(tempStudent?.password==PasswordSh1){
        return{successful:true,message:"Welcome to virtual career fair UCSC",type:'student',id:tempStudent?.id}
      }else {
        return{successful:false,message:"Wrong password. Try again or click ‘Forgot password’ to reset it. ",type:'',id:null}
      }

    }else if(tempUser?.type=='company'){
      const tempCompany:any= await company.findOne({email: email});
      if(tempCompany?.password==PasswordSh1){
        return{successful:true,message:"Welcome to virtual career fair UCSC",type:'company',id:tempCompany?.com_id}
      }
      else {
        return{successful:false,message:"Wrong password. Try again or click ‘Forgot password’ to reset it. ",type:'',id:null}
      }

    }else if(tempUser?.type=='organizer'){
      return{successful:true,message:"Welcome to virtual career fair UCSC",type:'organizer',id:3}

    }else if(tempUser?.type=='admin'){
      return{successful:true,message:"Welcome to virtual career fair UCSC",type:'admin',id:1}

    }else if(tempUser?.type=='coordinator'){
      return{successful:true,message:"Welcome to virtual career fair UCSC",type:'coordinator',id:2}

    }else{
      return{successful:false,message:"Unable to logging,try again",type:'',id:null}
    }
  }
}