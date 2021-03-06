const {gql} = require('apollo-server');
const query = gql`
  type Query {
    getUserFromUsername(username: String!): User,
    getUserFromEmail(email: String!): User,
    getUserFromUsernameOrEmail(username: String!, email: String!): User,
    getRecipes(userID: ID!): [Recipe],
    getBrews: [Brew],
  }
`;

module.exports = {
  query,
};
