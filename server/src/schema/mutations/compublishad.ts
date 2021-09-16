import {GraphQLString} from "graphql";

import {CreateAdResponseMessage} from "../typeDef/messages";

import crypto from "crypto";
import path from "path";
import fs from "fs";
import { adpublish } from "../../entities/adpublish";
import { GraphQLUpload } from "graphql-upload";


export const CREATE_AD = {
  type: CreateAdResponseMessage,
  args: {
    ad_description: {type: GraphQLString},
    ad_path1: {type: GraphQLUpload}
    

    
  },

  async resolve(parent: any, args: any) {
    const {ad_description, ad_path1} = args;
    const tempAdPath1:any= await ad_path1;
    const streamAd:any = tempAdPath1.createReadStream();
    const adPathName = path.join(__dirname, `../../../../client/src/assets/adverts/${tempAdPath1.filename}`)
    await streamAd.pipe(fs.createWriteStream(adPathName));
    await adpublish.insert({ad_description: ad_description , ad_path1: tempAdPath1.filename});
    return {successful: true, message: 'successfully Inserted!'}
  }
}