const {gql} = require('apollo-server');


const hopType = gql`
  type Hop {
    id: ID!,
    name: String!
    amount: Float!
    timing: Int!
  }
`;

module.exports = {
  hopType,
};
