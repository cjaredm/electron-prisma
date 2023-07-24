import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query QUERY_ME {
    me {
      id
      email
      firstname
      lastname
    }
  }
`;
