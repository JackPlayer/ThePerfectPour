import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
    }
  }
`;

const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(
    username: $username,
    email: $email,
    password: $password
  ) {
    id,
    username,
    email
  }
}
`;

export { LOGIN, CREATE_USER };
