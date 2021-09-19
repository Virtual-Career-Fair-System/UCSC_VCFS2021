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
 mutation createCv(  $cv_path1: Upload!){
   createCv( cv_path1:$cv_path1){
   successful
   message
   }
 }
`