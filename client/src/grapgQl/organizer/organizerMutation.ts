import {gql} from "@apollo/client";

export const UPLOAD_FILE = gql`
 mutation uploadFile( $file:Upload!,$name:String!,$description:String!,$rules:String!,$startDate:String!,$endDate:String!,$organizer:ID!){
   uploadFile(file:$file,name:$name,description:$description,rules:$rules,startDate:$startDate,endDate:$endDate,organizer:$organizer){
   successful
   message
   }
 }
`