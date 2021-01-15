/**
 * Graph QL Mutation and Query resolvers for recipe queries.
 */
const db = require('../db');
const {recipeQueries, userQueries} = require('../queries');
const {UserInputError} = require('apollo-server');

const {v4: uuidv4} = require('uuid');

/**
 * Resolvers
 */
const recipeResolvers = {
  Query: {
    getRecipes: async (root, args) => {
      return await getRecipes(root, args);
    },
  },
  Mutation: {
    createRecipe: async (root, args) => {
      return await createRecipe(root, args)
    },
  },
};

/**
 * Creates a new recipe entry in the database for a specified user
 * 
 * @param {*} root 
 * @param {*} args Object of userID, recipeName, style, type, sizeGal, yeast, description, hops and additions
 */
const createRecipe = async (root, args) => {
  const {
    userID, recipeName, style, type, sizeGal,
    yeast, description, hops, additions,
  } = args;

  console.log("Hops are: ", hops);
  checkUserIDValid(userID)
  await checkUserExists(userID)
  const newRecipe = {
    recipeID: uuidv4(),
    userID,
    recipeName,
    style,
    type,
    sizeGal,
    yeast,
    description,
    hopsStr: JSON.stringify(hops),
    additionsStr: JSON.stringify(additions),
    createdDate: new Date(Date.now()).toISOString(),
  }

  // Will either be null if unsuccessful or the newly inserted recipe id
  const insertRecipeResponse = await insertRecipe(newRecipe);
  return insertRecipeResponse;
}

/**
 * Inserts a new recipe into the database
 * 
 * @param {*} newRecipe New recipe to be inserted into the DB. Required fields of newRecipe object are listed below.
 * @returns the newly entered recipeID if operation was successful, null otherwise.
 */
const insertRecipe = async (newRecipe) => {
  console.log("The new recipe is: ", newRecipe)
  try {
    await db.query(recipeQueries.createRecipe(newRecipe));
  } catch (err) {
    console.log('Error adding to database: ');
    console.log(err.message);
    return null;
  }
  return newRecipe.recipeID
}

/**
 * Fetches the recipes of a user from the database
 * 
 * @param {*} root 
 * @param {*} args userID - the ID of the user's recipes that need fetching
 * @returns A recipes list with objects in project typedef Recipe format
 */
const getRecipes = async (root, args) => {
      const {userID} = args;

      checkUserIDValid(userID);
      await checkUserExists(userID);

      const recipes = await queryRecipes(userID);
      const recipesGQLMapped = mapRecipesToGQLObject(recipes)
      
      return recipesGQLMapped;
}

/**
 * Checks if a user with the userID exists in the database
 * 
 * @param {string} userID The userID to check 
 */
const checkUserExists = async (userID) => {
  const userResult = await db.query(userQueries.getUserByUserID(userID));

  if (userResult.rowCount != 1) {
    throw new UserInputError('UserID does not exist!');
  }
}

/**
 * Checks if the userID is null or undefined.
 * 
 * @param {string} userID UseID to check
 */
const checkUserIDValid = (userID) => {
  if (userID == null || userID == undefined) {
    throw new UserInputError('User ID must be defined!');
  }
}


/**
 * Queries the database (SELECT) to get recipes matching the userID
 * 
 * @param {string} userID 
 * @returns DB response object if the operation was successful, null otherwise
 */
const queryRecipes = async (userID) => {
  try {
    return await db.query(recipeQueries.getRecipesFromUserID(userID));
  } catch (err) {
    console.log('Error getting recipes');
    console.log(err.message);
    return null;
  }
}

/**
 * Maps the queried recipes to proper GraphQL Recipe Typedef list 
 * 
 * @param {object} recipesFromQuery Recipe response returned from a database query 
 */
const mapRecipesToGQLObject = (recipesFromQuery) => {
  return recipesFromQuery.rows.map((recipe) => {
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
}


module.exports = {
  recipeResolvers,
};
