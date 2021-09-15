import {GraphQLString} from "graphql";
import {editstudent} from '../../entities/editstudent';
import {user} from "../../entities/user";
import {CreateEventResponseEditProfileMessage} from "../typeDef/messages";
import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";

export const UPDATE_STUDENT = {
  type: CreateEventResponseEditProfileMessage,
  args: {
    fname: {type: GraphQLString},
    lname: {type: GraphQLString},
   
    projectDis1: {type: GraphQLString},
    project1: {type: GraphQLString},
    projectDis2: {type: GraphQLString},
    project2: {type: GraphQLString},
    projectDis3: {type: GraphQLString},
    project3: {type: GraphQLString},
    profile_pic: {type: GraphQLString},
    cover_pic: {type: GraphQLString},
    state: {type: GraphQLString},
    address: {type: GraphQLString},
    skills: {type: GraphQLString},
    linkedin: {type: GraphQLString},
    contactNumber: {type: GraphQLString},
    email: {type: GraphQLString},
  },

  async resolve(parent: any, args: any) {
    const {fname, lname, email, profile_pic,cover_pic,state,address,skills,linedin,contactNumber,project1,project2,project3,projectDis3,projectDis2,projectDis1} = args;

    await editstudent.insert({f_name:fname, l_name:lname, profile_pic:profile_pic,email:email,ContactNumber:contactNumber,state:state,cover_pic:cover_pic,address:address,$project2:project2,$project3:project3,$$project1:project1,$projectDis1:projectDis1,$projectDis2:projectDis2,$projectDis3:projectDis3});
    return{successful:true,message:'edit successfully!'}
  }
}