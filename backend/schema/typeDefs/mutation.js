const { gql } = require('apollo-server') 
const typeDef = gql`
  type Mutation {
    getUser: User,
    getRecipes: [Recipe],
    getBrews: [Brew],
  }
`

module.exports = {
  Mutation: typeDef,
}