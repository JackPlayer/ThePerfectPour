const { gql } = require('apollo-server') 


const typeDef = gql`
  type User {
    id: ID!,
    username: String!,
    pass_hash: String!,
    email: String!
  }
`
module.exports = {
  User: typeDef,
}