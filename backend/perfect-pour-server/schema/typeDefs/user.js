const { gql } = require('apollo-server') 


const typeDef = gql`
  type User {
    id: ID!,
    username: String!,
    passHash: String!,
    email: String!
  }
`
module.exports = {
  User: typeDef,
}