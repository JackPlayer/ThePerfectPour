const db = require('../db');
const {recipeQueries, userQueries} = require('../queries');
const {UserInputError} = require('apollo-server');

const {v4: uuidv4} = require('uuid');


const recipeResolvers = {
  Query: {
    getRecipes: async (root, args) => {
      const {userID} = args;

      if (userID == null || userID == undefined) {
        throw new UserInputError('User ID must be defined!');
      }
      const existingUser = await db.query(userQueries.getUserByUserID(userID));

      if (existingUser.rowCount == 0) {
        throw new UserInputError('User with that ID does not exist!');
      }
      let recipes = null;
      try {
        recipes = await db.query(recipeQueries.getRecipesFromUserID(userID));
      } catch (err) {
        console.log('Error getting recipes');
        console.log(err.message);
        return null;
      }

      recipesMapped = recipes.rows.map((recipe) => {
        return {
          id: recipe.id,
          user: recipe.user_id,
          name: recipe.name,
          style: recipe.style,
          type: recipe.type,
          size: recipe.size_gal,
          yeast: recipe.yeast,
          description: recipe.description,
          hops: recipe.hops,
          additions: recipe.additions,
          created: recipe.created_on,
        };
      });
      return recipesMapped;
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
