import {gql} from "@apollo/client";

export const GET_ALL_COMPANY = gql`
  query getAllCompany{
    getAllCompany{
    name
    email
    date
    accept
    }
  }
`
