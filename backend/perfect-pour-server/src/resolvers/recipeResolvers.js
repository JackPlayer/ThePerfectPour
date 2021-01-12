const db = require('../db');
const {recipeQueries, userQueries} = require('../queries');
const {UserInputError} = require('apollo-server');

const {v4: uuidv4} = require('uuid');


const recipeResolvers = {
  Query: {
    getRecipes: (userID) => {
      return null;
    },
  },

  Mutation: {
    createRecipe: async (root, args) => {
      const {
        userID, recipeName, style, type, sizeGal,
        yeast, description, hops, addition,
      } = args;

      const userResult = await db.query(userQueries.getUserByUserID(userID));

      if (userResult.rowCount != 1) {
        throw new UserInputError('UserID does not exist!');
      }

      const recipeID = uuidv4();
      const timeStamp = new Date(Date.now()).toISOString();

      await db.query(
          recipeQueries.createRecipeFromUserID(
              recipeID,
              userID,
              recipeName,
              style,
              type,
              sizeGal,
              yeast,
              description,
              hops,
              addition,
              timeStamp,
          ),
      );

      return recipeID;
    },
  },
};

module.exports = {
  recipeResolvers,
};
