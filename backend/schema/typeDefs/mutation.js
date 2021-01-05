const { gql } = require('apollo-server') 
const typeDef = gql`
  type Mutation {
    createUser (
      username: String!, 
      email: String!, 
      password: String!,
    ): User
  }
`

module.exports = {
  Mutation: typeDef,
}