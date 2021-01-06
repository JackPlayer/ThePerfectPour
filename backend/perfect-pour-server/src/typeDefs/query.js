const {gql} = require('apollo-server');
const query = gql`
  type Query {
    getUserFromUsername(username: String!): User,
    getRecipes: [Recipe],
    getBrews: [Brew],
  }
`;

module.exports = {
  query,
};
