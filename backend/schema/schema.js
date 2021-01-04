const { makeExecutableSchema } = require('apollo-server');
const db = require('../db')

const { User } = require('./typeDefs/user')
const { Brew } = require('./typeDefs/brew')
const { Hop } = require('./typeDefs/hop')
const { Recipe } = require('./typeDefs/recipe')
const { Addition } = require('./typeDefs/addition')
const { Query } = require('./typeDefs/query')

const schema = makeExecutableSchema({
  typeDefs: [User, Recipe, Brew, Addition, Hop, Query],
  resolvers: {
    Query: {
      dummy: () => db.query('SELECT * FROM accounts', (err, res) => console.log(res))
    }
  },
})

module.exports = {
  schema,
}


