import {gql} from "@apollo/client";

export const APPROVE_EVENT = gql`
 mutation approveEvent( $event_id: ID!){
   approveEvent(event_id:$event_id){
   successful
   message
   }
 }
`