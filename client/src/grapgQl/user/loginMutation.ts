import {gql} from "@apollo/client";

export const LOGIN = gql`
 mutation login($email: String!,$password: String! ){
   login( password:$password,email:$email ){
   successful
   type
   id
   message
   }
 }
`