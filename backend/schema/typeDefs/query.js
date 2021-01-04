const { gql } = require('apollo-server') 
const typeDef = gql`
  type Query {
    dummy: String,
  }
`

module.exports = {
  Query: typeDef,
}