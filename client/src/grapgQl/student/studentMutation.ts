import {gql} from "@apollo/client";

export const CREATE_STUDENT = gql`       
 mutation createStudent( $fname:String!, $lname:String!, $email: String!,$regNo: String!,$password: String!,$state: String! ){
   createStudent( fname:$fname, lname:$lname, password:$password,regNo: $regNo,email:$email,state:$state ){
   successful
   message
   }
 }
`




export const CHANGE_AVAILABLE = gql`       
 mutation changeAvailable( $id:Int!, $available:String! ){
  changeAvailable( id : $id, available : $available ){
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
    available
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
export const CREATE_CV = gql`
 mutation createCv($cv_path1: Upload!,$ad_id: ID!,$student_id: ID!){
   createCv( cv_path1 : $cv_path1, ad_id : $ad_id, student_id : $student_id ){
   successful
   message
   }
 }
`