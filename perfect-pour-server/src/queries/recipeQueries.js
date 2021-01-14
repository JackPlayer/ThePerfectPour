/**
 * DB Queries relating to recipes
 */


/**
  * Gets an object properly formatted for querying recipes.
  * @param {string} userID The uuid userID to fetch
  * @return {object} node-pg object for querying DB.
  */
const getRecipesFromUserID = (userID) => {
  const text = `SELECT * FROM recipes WHERE user_id=$1;`;
  const values = [userID];

  return {
    text,
    values,
  };
};


/**
  * Gets an object properly formatted for inserting into the DB
  * @param {object} newRecipe Object containing the new recipe information
  * @return {object} node-pg object for inserting recipe into DB.
  */
const createRecipe = (newRecipe) => {
  const {
    recipeID, userID, recipeName, style,
    type, sizeGal, yeast, description, hops,
    additions, createdDate,
  } = newRecipe;
  const text = `INSERT INTO recipes (
                        id, 
                        user_id, 
                        name, 
                        style, 
                        type, 
                        size_gal, 
                        yeast, 
                        description, 
                        hops,
                        additions, 
                        created_on
                        ) VALUES (
                          $1,
                          $2,
                          $3,
                          $4,
                          $5,
                          $6,
                          $7,
                          $8,
                          $9,
                          $10,
                          $11
                        );`;
  const values = [
    recipeID, userID, recipeName, style, type,
    sizeGal, yeast, description, hops, additions, createdDate,
  ];
  return {
    text,
    values,
  };
};

module.exports = {
  recipeQueries: {
    getRecipesFromUserID,
    createRecipe,
  },
};
