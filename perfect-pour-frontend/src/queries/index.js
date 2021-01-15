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

const GET_RECIPES = gql`
query getRecipes($userID: ID!) {
  getRecipes(userID: $userID) {
    id,
    name,
    style,
    type,
    size,
    yeast,
    description,
    hops,
    additions,
    created
  }
}
`;

const CREATE_RECIPE = gql`
mutation createRecipe($userID: ID!, $recipeName: String!, $style: String!, $type: String!, $sizeGal: Float!, $yeast: String, $description: String, $hops: JSON, $additions: JSON) {
  createRecipe(userID: $userID, recipeName: $recipeName, style: $style, type: $type, sizeGal: $sizeGal, yeast: $yeast, description: $description, hops: $hops, additions: $additions)
}
`;

export {
  LOGIN, CREATE_USER, GET_USER, GET_RECIPES, CREATE_RECIPE,
};
