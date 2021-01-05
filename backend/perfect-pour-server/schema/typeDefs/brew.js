const { gql } = require('apollo-server') 
const typeDef = gql`
  type Brew {
    id: ID!,
    recipe: Recipe!,
    start_date: String!, 
    end_date: String!
  }
`

module.exports = {
  Brew: typeDef,
}