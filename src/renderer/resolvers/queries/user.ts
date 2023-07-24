import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query QUERY_USER($id: ID!) {
    user(id: $id) {
      id
      email
      firstname
      lastname
    }
  }
`;

export const QUERY_USERS = gql`
  query QUERY_USERS {
    users {
      id
      email
      firstname
      lastname
      phone
    }
  }
`;
