export const typeDef = `
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
`