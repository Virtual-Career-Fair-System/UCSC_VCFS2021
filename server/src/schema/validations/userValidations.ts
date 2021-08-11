import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {event} from "../../entities/event";

export const isExistEmail = (email:string)=>{
  return user.findOne({email: email});

}

export const isExistRegNo = (regNo:string)=>{
  return student.findOne({reg_no: regNo});
}

export const isExistEventName = (eventName:string)=>{
  return event.findOne({name: eventName});
}