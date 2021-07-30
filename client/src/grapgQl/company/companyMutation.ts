import {gql} from "@apollo/client";

export const CREATE_COMPANY = gql`
 mutation createCompany( $name:String!,$email: String!,$password: String! ){
   createCompany( name:$name, password:$password, email:$email ){
   successful
   message
   }
 }
`