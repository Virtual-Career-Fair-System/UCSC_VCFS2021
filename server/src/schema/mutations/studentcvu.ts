import {GraphQLString} from "graphql";

import { CreateCvResponseMessage} from "../typeDef/messages";

import crypto from "crypto";
import path from "path";
import fs from "fs";
import { cvupload } from "../../entities/cvupload";
import { GraphQLUpload } from "graphql-upload";


export const CREATE_CV = {
  type: CreateCvResponseMessage,
  args: {
    s_name: {type: GraphQLString},
    s_email: {type: GraphQLString},
    cv_path1: {type: GraphQLUpload}
    

    
  },

  async resolve(parent: any, args: any) {
    const {s_name,s_email, cv_path1} = args;
    const tempCvPath1:any= await cv_path1;
    const streamCv:any = tempCvPath1.createReadStream();
    const cvPathName = path.join(__dirname, `../../../../client/src/assets/cv/${tempCvPath1.filename}`)
    await streamCv.pipe(fs.createWriteStream(cvPathName));
    await cvupload.insert({s_name: s_name ,s_email: s_email, cv_path1: tempCvPath1.filename});
    return {successful: true, message: 'successfully Inserted!'}
  }
}