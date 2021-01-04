const { gql } = require('apollo-server') 

const typeDef = gql`
  type Recipe {
    id: ID!
    user: User,
    name: String!,
    style: String!,
    type: String!,
    size: Float!,
    yeast: String,
    description: String,
    hops: [Hop],
    addition: [Addition],
    created: String!
  }
`
module.exports = {
  Recipe: typeDef,
}
