import {gql} from "@apollo/client";

export const CREATE_STUDENT = gql`       
 mutation createStudent( $fname:String!, $lname:String!, $email: String!,$regNo: String!,$password: String! ){
   createStudent( fname:$fname, lname:$lname, password:$password,regNo: $regNo,email:$email ){
   successful
   message
   }
 }
`