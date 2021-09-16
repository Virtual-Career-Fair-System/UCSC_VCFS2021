import {GraphQLString} from "graphql";

import {CreateAdResponseMessage} from "../typeDef/messages";

import crypto from "crypto";

import { adpublish } from "../../entities/adpublish";


export const CREATE_AD = {
  type: CreateAdResponseMessage,
  args: {
    ad_description: {type: GraphQLString},
    ad_path1: {type: GraphQLString}
    

    
  },

  async resolve(parent: any, args: any) {
    const {ad_description, ad_path1} = args;
    
    await adpublish.insert({ad_description: ad_description , ad_path1: ad_path1});
    return {successful: true, message: 'successfully Inserted!'}
  }
}