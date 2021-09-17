import {gql} from "@apollo/client";

export const CREATE_STUDENT = gql`       
 mutation createStudent( $fname:String!, $lname:String!, $email: String!,$regNo: String!,$password: String! ){
   createStudent( fname:$fname, lname:$lname, password:$password,regNo: $regNo,email:$email ){
   successful
   message
   }
 }
`

export const CREATE_CV = gql`
 mutation createCv( $s_name:String!,$s_email:String!, $cv_path1: Upload!){
   createCv(s_name:$s_name,s_email:$s_email, cv_path1:$cv_path1){
   successful
   message
   }
 }
`