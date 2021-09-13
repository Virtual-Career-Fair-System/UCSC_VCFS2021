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