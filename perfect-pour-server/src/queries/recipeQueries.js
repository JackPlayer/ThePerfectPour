const getRecipesFromUserID = (userID) => {
  const text = `SELECT recipes.name, 
                        recipes.style, 
                        recipes.type, 
                        recipes.size_gal, 
                        recipes.yeast,
                        recipes.description,
                        recipes.hops, 
                        recipes.additions,
                        recipes.created_on FROM recipes WHERE user_id=$1;`;
  const values = [userID];

  return {
    text,
    values,
  };
};


module.exports = {
  recipeQueries: {
    getRecipesFromUserID,
  },
};
