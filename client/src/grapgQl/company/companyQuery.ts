import {gql} from "@apollo/client";

export const GET_CV = gql`
  query getCv{
    getCv{
        cv_id
        advertisementAdId
        studentId
        cv_path1
    }
  }
`
