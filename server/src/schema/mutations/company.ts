import {GraphQLID, GraphQLList, GraphQLString} from "graphql";
import {student} from '../../entities/student';
import {user} from "../../entities/user";
import {CreateEventResponseEditProfileMessage, RegisterResponseMessageType} from "../typeDef/messages";
import {isExistEmail, isExistRegNo} from "../validations/userValidations";
import crypto from "crypto";
import {company} from "../../entities/company";
import {CvType} from "../typeDef/cvupload";
import {createQueryBuilder} from "typeorm";
import {getCVType} from "../typeDef/cvupload";
import {CompanyType} from "../typeDef/company";

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

export const GET_CV_APPLICANTS = {
  type: new GraphQLList(getCVType),
  args: {
    ad_id: {type: GraphQLID},
  },

  async resolve(parent: any, args: any) {
    const {ad_id} = args;

    const query = createQueryBuilder('cvupload')
      .select('cvupload.cv_id', 'cv_id')
      .addSelect('cvupload.cv_path1', 'cv_path1')
      .addSelect('cvupload.status', 'status')
      .addSelect('s.image', 'image')
      .addSelect('s.id', 'id')
      .addSelect('s.email', 'email')
      .addSelect('s.f_name', 'f_name')
      .addSelect('s.l_name', 'l_name')
      .addSelect('s.available', 'available')
      .innerJoin('student', 's', 'cvupload.studentId = s.id')//INNER JOIN table2 t2 ON t1.id = t2.id
      .where("cvupload.advertisementAdId = :id", { id: ad_id})
      .getRawMany();
    return await query;
  }
}

export const GET_COMPANY = {
  type: CompanyType,
  args: {
    com_id: {type: GraphQLID},
  },

  async resolve(parent: any, args: any) {
    const {com_id} = args;
    return await company.findOne({com_id:com_id});
  }
}
