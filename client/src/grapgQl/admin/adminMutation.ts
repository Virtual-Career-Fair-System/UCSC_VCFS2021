import {gql} from "@apollo/client";

export const ACCEPT_STUDENT = gql`
 mutation acceptStudent($studentId:ID!,$accept:String!){
   acceptStudent(studentId:$studentId,accept:$accept){
   successful
   message
   }
 }
`
export const ACCEPT_COMPANY = gql`
 mutation acceptCompany($com_id:ID!,$accept:String!){
   acceptCompany(com_id:$com_id,accept:$accept){
   successful
   message
   }
 }
`
export const APPROVE_EVENT = gql`
 mutation approveEvent( $event_id: ID!){
   approveEvent(event_id:$event_id){
   successful
   message
   }
 }
`