const getRecipesFromUserID = (userID) => {
  const text = `SELECT * FROM recipes WHERE user_id=$1;`;
  const values = [userID];

  return {
    text,
    values,
  };
};

const createRecipeFromUserID = (
    recipeID, userID, recipeName, style,
    type, sizeGal, yeast, description, hops,
    additions, createdDate,
) => {
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
    createRecipeFromUserID,
  },
};
