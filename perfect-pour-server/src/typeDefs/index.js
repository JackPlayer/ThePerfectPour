/**
 * Module for typeDefs
 */
const {query} = require('./query');
const {mutation} = require('./mutation');
const {userType,

  brewType,
  recipeType,
  tokenType,
} = require('./types');

const typeDefs = [
  'scalar JSON',
  query,
  mutation,
  userType,
  brewType,
  recipeType,
  tokenType,
];

module.exports = {
  typeDefs,
};
