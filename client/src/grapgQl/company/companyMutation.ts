import { gql } from "@apollo/client";

export const CREATE_COMPANY = gql`
 mutation createCompany( $name:String!,$email: String!,$password: String! ){
   createCompany( name:$name, password:$password, email:$email ){
   successful
   message
   }
 }
`

export const CREATE_EMAIL = gql`
 mutation createEmail( $c_name:String!,$s_email: String!,$subject:String!,$timea:String!,$linka:String!){
   createEmail(c_name:$c_name, s_email:$s_email, subject:$subject,timea:$timea, linka:$linka){
   successful
   message
   }
 }
`

export const CREATE_AD = gql`
 mutation createAd( $ad_description:String!,$ad_path1: Upload!){
   createAd(ad_description:$ad_description, ad_path1:$ad_path1){
   successful
   message
   }
 }
`