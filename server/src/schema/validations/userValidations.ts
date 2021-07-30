import {student} from '../../entities/student';
import {user} from "../../entities/user";

export const isExistEmail = (email:string)=>{
  return user.findOne({email: email});

}

export const isExistRegNo = (regNo:string)=>{
  return student.findOne({reg_no: regNo});
}
