const {gql} = require('apollo-server');

const userType = gql`
  type User {
    id: ID!,
    username: String!,
    passHash: String!,
    email: String!,
    token: Token
  }
`;
module.exports = {
  userType,
};
