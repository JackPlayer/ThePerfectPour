const getAllAccounts = 'SELECT * FROM accounts';
const getAllBrews = 'SELECT * FROM brews';
const getAllRecipes = 'SELECT * FROM recipes';

const getUserByID = (id) => {
  return {
    query: 'SELECT * FROM brews WHERE id=$1',
    values: [id],
  };
};

const getRecipesByUserID = (id) => {
  return {
    query: 'SELECT * FROM recipes WHERE user_id=$1',
    values: [id],
  };
};

const getBrewsByUserID = (id) => {
  return {
    query: 'SELECT * FROM brews WHERE user_id=$1',
    values: [id],
  };
};

const getBrewsByRecipeID = (id) => {
  return {
    query: 'SELECT * FROM brews WHERE recipe_id=$1',
    values: [id],
  };
};

module.exports = {
  getAllAccounts,
  getAllBrews,
  getAllRecipes,
  getBrewsByRecipeID,
  getBrewsByUserID,
  getUserByID,
  getRecipesByUserID,
};
