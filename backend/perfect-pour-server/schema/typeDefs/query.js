const { gql } = require('apollo-server') 
const typeDef = gql`
  type Query {
    getUser: User,
    getRecipes: [Recipe],
    getBrews: [Brew],
  }
`

module.exports = {
  Query: typeDef,
}