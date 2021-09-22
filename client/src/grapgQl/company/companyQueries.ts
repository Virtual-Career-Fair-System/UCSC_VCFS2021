import {gql} from "@apollo/client";

export const GET_ALL_COMPANY = gql`
  query getAllCompany{
    getAllCompany{
    com_id
    com_name
    email
    date
    accept
    }
  }
`
