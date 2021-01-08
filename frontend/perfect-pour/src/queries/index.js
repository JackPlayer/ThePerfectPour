import { gql } from '@apollo/client';

const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      username,
      email,
      id,
      token {
        value,
      }
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

const GET_USER = gql`
query getUser($username: String!) {
  getUserFromUsername(username: $username) {
    username,
    email,
    id
  }
}
`;

export { LOGIN, CREATE_USER, GET_USER };
