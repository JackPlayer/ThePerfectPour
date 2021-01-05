const { query } = require("./query");
const { mutation } = require("./mutation")
const { userType, hopType, additionType, brewType, recipeType } = require("./types");

const typeDefs = [query, mutation, userType, hopType, additionType, brewType, recipeType];

module.exports = {
  typeDefs,
};