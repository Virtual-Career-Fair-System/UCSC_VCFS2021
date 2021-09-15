import {gql} from "@apollo/client";

export const UPDATE_STUDENT = gql`       
 mutation updateStudent( $fname:String!, 
   $lname:String!,
    $email: String!,
    $project1: String!,
    $projectDis1: String!,
    $project2: String!,
    $projectDis2: String!,
    $project3: String!,
    $projectDis3: String!,
  $skills: String!,
  $contactNumber: String!,
  $linkedIn: String!,
  $address: String!){
   updateStudent( fname:$fname,
      lname:$lname  ,
       email:$email ,
       project1:project1,
       projectDis1:$projectDis1,
        project2:$project2,
         projectDis2:$projectDis2,
          project3:$project3 ,
          projectDis3:$projectDis3,
    skills: $skills,
    contactNumber:$contactNumber,
    linkedIn:$linkedIn,
    address:$address){
      successful
      message
      }
   }
 
`

