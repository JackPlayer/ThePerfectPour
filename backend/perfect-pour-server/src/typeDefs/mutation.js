const {gql} = require('apollo-server');

const mutation = gql`
  type Mutation {
    createUser (
      username: String!, 
      email: String!, 
      password: String!,
    ): User

    login (
      username: String!,
      password: String!,
    ): User

    createRecipe (
      userID: ID!,
      recipeName: String!,
      style: String!,
      type: String!,
      sizeGal: Float!,
      yeast: String,
      description: String,
      hops: [JSON],
      addition: [JSON],
    ): ID
  }
`;

module.exports = {
  mutation,
};
