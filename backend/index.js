/**
 * Server for perfect pour application
 */
const { ApolloServer } = require('apollo-server')
const { schema } = require('./schema/schema')

const server = new ApolloServer({schema});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);

})