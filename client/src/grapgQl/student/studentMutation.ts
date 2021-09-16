import {gql} from "@apollo/client";

export const CREATE_STUDENT = gql`       
 mutation createStudent( $fname:String!, $lname:String!, $email: String!,$regNo: String!,$password: String! ){
   createStudent( fname:$fname, lname:$lname, password:$password,regNo: $regNo,email:$email ){
   successful
   message
   }
 }
`

export const GET_STUDENT = gql`       
 mutation getStudent( $id:Int! ){
   getStudent(id:$id){
    id
    image
    reg_no
    f_name
    l_name
    email
    batch_no
    about
    cover_pic
    ContactNumber
    linkedin
    address
    state
    projectDis1
    project1
    projectDis2
    project2
    projectDis3
    project3
    skills
   }
 }
`