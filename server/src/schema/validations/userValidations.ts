import {student} from '../../entities/student';

export const isExistEmail = (email:string)=>{
  return student.findOne({email: email});
}

export const isExistRegNo = (regNo:string)=>{
  return student.findOne({reg_no: regNo});
}
