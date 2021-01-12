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
        yeast, description, hops, additions,
      } = args;

      const userResult = await db.query(userQueries.getUserByUserID(userID));

      if (userResult.rowCount != 1) {
        throw new UserInputError('UserID does not exist!');
      }
      const hopsStr = JSON.stringify(hops);
      const additionsStr = JSON.stringify(additions);
      const recipeID = uuidv4();
      const timeStamp = new Date(Date.now()).toISOString();
      try {
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
                hopsStr,
                additionsStr,
                timeStamp,
            ),
        );
      } catch (err) {
        console.log('Error adding to database: ');
        console.log(err.message);
        return null;
      }

      return recipeID;
    },
  },
};

module.exports = {
  recipeResolvers,
};
