import { gql } from "@apollo/client";

export const CREATE_COMPANY = gql`
 mutation createCompany( $name:String!,$email: String!,$password: String! ){
   createCompany( name:$name, password:$password, email:$email ){
   successful
   message
   }
 }
`
export const GET_COMPANY = gql`
 mutation getCompany( $com_id:ID!){
   getCompany( com_id:$com_id ){
    com_id
    com_name
    email
    password
    con_no
    description
    date
    accept
   }
 }
`

export const CREATE_EMAIL = gql`
 mutation createEmail($c_name : String!, $s_email : String!, $subject : String!, $timea : String!, $linka : String!, $cv_id:ID!){
   createEmail( c_name : $c_name, s_email : $s_email, subject : $subject , timea : $timea, linka : $linka, cv_id : $cv_id ){
   successful
   message
   }
 }
`

export const CREATE_AD = gql`
 mutation createAd( $loginId: Int!,$eventId: Int!, $ad_description:String!,$image: Upload!){
   createAd(loginId:$loginId, eventId: $eventId, ad_description:$ad_description, image:$image){
   successful
   message
   }
 }
`

export const GET_CV_APPLICANTS = gql`
 mutation getCvApplication( $ad_id: ID!){
   getCvApplication( ad_id:$ad_id){
    cv_id
    id
    cv_path1
    image
    email
    f_name
    l_name
    available
    status
   }
 }
`