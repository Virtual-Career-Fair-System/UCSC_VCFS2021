import {gql} from "@apollo/client";

export const GET_STUDENT = gql`       
 query getStudent( $id:Int! ){
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
export const GET_ALL_STUDENT = gql`
  query getAllStudent{
    getAllStudent{
    id
    reg_no
    f_name
    l_name
    email
    batch_no
    date
    accept
    }
  }
`
