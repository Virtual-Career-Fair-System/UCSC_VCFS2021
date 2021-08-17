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
 mutation createEmail( $com_id:Number!, $company_name:String!,$stu_email: String!, $stu_id: String!, $ad_id: String!, $subject: String!, $meeting: String! ){
   createEmail( com_id: $com_id, company_name:$company_name, stu_email:$stu_email , stu_id: $stu_id , ad_id: $ad_id , subject: $subject, meeting: $meeting){
   successful
   message
   }
 }
`