const {gql} = require('apollo-server');

const additionType = gql`
  type Addition {
    id: ID!,
    name: String!
    amount: Float!
  }
`;
module.exports = {
  additionType,
};
