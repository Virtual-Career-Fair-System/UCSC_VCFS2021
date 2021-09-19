import {GraphQLInt, GraphQLString} from "graphql";

import {CreateAdResponseMessage} from "../typeDef/messages";

import crypto from "crypto";
import path from "path";
import fs from "fs";
import { adpublish } from "../../entities/adpublish";
import { GraphQLUpload } from "graphql-upload";
import { advertisement } from "../../entities/advertisement";


export const CREATE_AD = {
  type: CreateAdResponseMessage,
  args: {
    eventId: {type: GraphQLInt},
    loginId : {type: GraphQLInt},
    ad_description: {type: GraphQLString},
    image: {type: GraphQLUpload}
  },

  async resolve(parent: any, args: any) {
    const {loginId, eventId, ad_description, image} = args;
    const tempAdPath1:any= await image;
    const streamAd:any = tempAdPath1.createReadStream();
    const adPathName = path.join(__dirname, `../../../../client/src/assets/adverts/${tempAdPath1.filename}`)
    await streamAd.pipe(fs.createWriteStream(adPathName));
    await advertisement.insert({ event:eventId, company:loginId, description: ad_description , image: tempAdPath1.filename});
    return {successful: true, message: 'successfully Inserted!'}
  }
}