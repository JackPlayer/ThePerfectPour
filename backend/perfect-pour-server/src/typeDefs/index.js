const {query} = require('./query');
const {mutation} = require('./mutation');
const {userType,
  hopType,
  additionType,
  brewType,
  recipeType,
  tokenType,
} = require('./types');

const typeDefs = [
  'scalar JSON',
  query,
  mutation,
  userType,
  hopType,
  additionType,
  brewType,
  recipeType,
  tokenType,
];

module.exports = {
  typeDefs,
};
