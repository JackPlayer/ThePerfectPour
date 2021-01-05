const { gql } = require('apollo-server') 

const brewType = gql`
  type Brew {
    id: ID!,
    recipe: Recipe!,
    start_date: String!, 
    end_date: String!
  }
`

module.exports = {
  brewType,
}