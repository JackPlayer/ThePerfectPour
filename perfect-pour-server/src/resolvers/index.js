/**
 * GraphQL Resolvers module
 */
const {userResolvers} = require('./userResolvers');
const {brewResolvers} = require('./brewResolvers');
const {recipeResolvers} = require('./recipeResolvers');
const GraphQLJSON = require('graphql-type-json');


const resolvers = [
  userResolvers,
  brewResolvers,
  recipeResolvers,
  {JSON: GraphQLJSON},
];

module.exports = {
  resolvers,
};
