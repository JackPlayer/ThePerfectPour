/**
 * DB Queries relating to user accounts and login
 */

/**
  * Query to get the user by username
  * @param {string} username Username to query
  * @return {object} node-pg formatted query object
  */
const getUserByUsername = (username) => {
  const text = 'SELECT * FROM accounts WHERE username=$1';
  const values = [username];
  return {
    text,
    values,
  };
};


/**
  * Query to get the user by email
  * @param {string} email email to query
  * @return {object} node-pg formatted query object
  */
const getUserByEmail = (email) => {
  const text = 'SELECT * FROM accounts WHERE email=$1';
  const values = [email];
  return {
    text,
    values,
  };
};

/**
  * Query to get the user by email or username
  * @param {string} username username to query
  * @param {string} email email to query
  * @return {object} node-pg formatted query object
  */
const getUserByEmailOrUsername = (username, email) => {
  const text = 'SELECT * FROM accounts WHERE email=$1 OR username=$2';
  const values = [email, username];
  return {
    text,
    values,
  };
};


/**
  * Query to get the user by userID
  * @param {string} userID userID to query
  * @return {object} node-pg formatted query object
  */
const getUserByUserID = (userID) => {
  const text = 'SELECT * FROM accounts WHERE id=$1;';
  const values = [userID];
  return {
    text,
    values,
  };
};

/**
  * Query to insert a new user into the database
  * @param {object} newUser newUser object to insert. Required fields are below
  * @return {object} node-pg formatted query object
  */
const newUser = (newUser) => {
  const {passHash, id, username, email, createdOn} = newUser;
  const text = `INSERT INTO 
                  accounts(id, username, pass_hash, email, created_on)
                VALUES ($1, $2, $3, $4, $5)`;

  const values = [id, username, passHash, email, createdOn];

  return {
    text,
    values,
  };
};


module.exports = {
  userQueries: {
    getUserByUsername,
    getUserByEmail,
    getUserByEmailOrUsername,
    getUserByUserID,
    newUser,
  },
};
