import { gql } from '@apollo/client';

// export const MUTATION_SIGN_OUT = gql`
//   mutation MUTATION_SIGN_OUT {
//     endSession
//   }
// `;

export const MUTATION_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      id
      email
      firstname
      lastname
    }
  }
`;
