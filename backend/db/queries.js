const getAllAccounts = 'SELECT * FROM accounts';
const getAllBrews = 'SELECT * FROM brews';
const getAllRecipes = 'SELECT * FROM recipes';

const getUserById = (id) => {
  return {
    query: 'SELECT * FROM accounts WHERE id=$1',
    values: [id],
  }
}

const getRecipesById = (id) => {
  return {
    query: 'SELECT * FROM recipes WHERE id=$1',
    values: [id],
  }
}

const getBrewsById = (id) => {
  return {
    query: 'SELECT * FROM brews WHERE id=$1',
    values: [id],
  }
}