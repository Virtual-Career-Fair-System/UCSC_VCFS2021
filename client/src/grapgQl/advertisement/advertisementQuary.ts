import {gql} from "@apollo/client";

export const GET_ALL_ADVERTISEMENTS = gql`
  query getAllAdvertisements{
    getAllAdvertisements{
      ad_id  
      eventId
      companyComId
      com_name
      description
      image  
      status
      event_code
      category
    }
  }
`
