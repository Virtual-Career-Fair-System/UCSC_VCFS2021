import {gql} from "@apollo/client";

export const GET_ALL_EVENTS = gql`
  query getAllEvents{
    getAllEvents{
      id  
      name
      event_code
      description
      organizer  
      cover_image
      rules
      start_date
      end_date
      status
    }
  }
`
