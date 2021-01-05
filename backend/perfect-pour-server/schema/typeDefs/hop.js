const { gql } = require('apollo-server') 


const typeDef = gql`
  type Hop {
    id: ID!,
    name: String!
    amount: Float!
    timing: Int!
  }
`

module.exports = {
  Hop: typeDef,
}