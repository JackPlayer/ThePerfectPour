const { gql } = require('apollo-server') 
const mutation = gql`
  type Mutation {
    createUser (
      username: String!, 
      email: String!, 
      password: String!,
    ): User
  }
`

module.exports = {
  mutation,
}