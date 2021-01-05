const {gql} = require('apollo-server');
const query = gql`
  type Query {
    getUser: User,
    getRecipes: [Recipe],
    getBrews: [Brew],
  }
`;

module.exports = {
  query,
};
