const {userResolvers} = require('./userResolvers');
const {brewResolvers} = require('./brewResolvers');
const {recipeResolvers} = require('./recipeResolvers');

const resolvers = [userResolvers, brewResolvers, recipeResolvers];

module.exports = {
  resolvers,
};
