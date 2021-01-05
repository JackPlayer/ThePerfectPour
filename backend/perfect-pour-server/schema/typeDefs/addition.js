const typeDef = `
  type Addition {
    id: ID!,
    name: String!
    amount: Float!
  }
`

module.exports = {
  Addition: typeDef,
}