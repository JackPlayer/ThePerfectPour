/**
 * Resolvers for user accounts
 */

require('dotenv').config();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {AuthenticationError, UserInputError} = require('apollo-server');
const {userQueries} = require('../queries');
const {v4: uuidv4} = require('uuid');

/**
 * Queries and mutations relating to login and user accounts
 */
const userResolvers = {
  Query: {
    getUserFromUsername: async (root, {username}) => {
      return await getUserFromUsername(username);
    },
  },

  Mutation: {
    createUser: async (root, {email, password, username}) => {
      return await createUser(username, email, password);
    },

    login: async (root, {username, password}) => {
      return await login(username, password);
    },
  },
};

/**
 * Gets a user
 * @param {*} username the username to query
 */
const getUserFromUsername = async (username) => {
  checkUsernameIsValid(username);
  const user = await getUserFromDB(username);

  return {
    ...user,
    passHash: user.pass_hash,
  };
};

/**
 * Creates a user account
 * @param {string} username New username
 * @param {string} email New email
 * @param {string} password New password
 */
const createUser = async (username, email, password) => {
  await userExists(username, email);
  checkNewUserFields(username, email, password);


  const newUser = {
    passHash: await bcrypt.hash(password, 10),
    id: uuidv4(),
    username,
    email,
    createdOn: new Date(Date.now()).toISOString(),
  };

  await addUserToDB(newUser);
  return newUser;
};


/**
 * Login with username and password
 * @param {string} username The username to login
 * @param {string} password The password to the account
 * @return {object} A graphQL user object with a token attached if login success
 */
const login = async (username, password) => {
  checkInputsAreValid(username, password);
  const user = await getExistingUser(username);
  const passHash = user.pass_hash;
  const isMatch = await checkPasswordsMatch(passHash, password);
  if (!isMatch) {
    throw new AuthenticationError('Username and password invalid');
  };
  const email = user.email;
  const id = user.id;

  return {
    username,
    email,
    passHash,
    token: {
      value: jwt.sign(username, process.env.SECRET),
    },
    id,
  };
};

/**
 * Queries the database for a user
 * @param {string} username username to query
 */
const getUserFromDB = async (username) => {
  const userResults = await db
      .query(userQueries.getUserByUsername(username));
  if (userResults.rowCount === 0 ) {
    throw new UserInputError('Username does not exist!');
  }
  return userResults.rows[0];
};

/**
 * Queries the database to see if there is an account with username or email
 * @param {string} username The passwrod
 * @param {string} email The email
 */
const userExists = async (username, email) => {
  const existingUserQuery = await db.query(
      userQueries.getUserByEmailOrUsername(username, email),
  );
  if (existingUserQuery.rowCount !== 0) {
    throw new UserInputError('User already exists!');
  }
};

/**
 * Adds a new user to the database
 * @param {object} newUser Object with user properties to add to the database
 */
const addUserToDB = async (newUser) => {
  return await db.query(
      userQueries.newUser(newUser),
  );
};

/**
 * Checks the new fields are valid
 * @param {string} username The username
 * @param {string} email The email
 * @param {string} password The password
 */
const checkNewUserFields = (username, email, password) => {
  if (
    email.length === 0 ||
    password.length === 0 ||
    username.length === 0) {
    throw new UserInputError('Arguments must be provided!');
  }
};


/**
 * Checks if the username is valid.
 * @param {string} username username to check
 */
const checkUsernameIsValid = (username) => {
  if (username === undefined ||
    username == null) {
    throw new UserInputError('Username must be provided!');
  }
};

/**
 * Check that inputs are valid
 * @param {*} username The username to check
 * @param {*} password The password to check
 */
const checkInputsAreValid = (username, password) => {
  if (
    username === undefined ||
    password === undefined ||
    password === null ||
    username === null
  ) {
    throw new UserInputError('Arguments are unspecified.');
  };
};

/**
 * Queries the database to see if the user exists
 * @param {*} username The username to query
 * @return {object} The user data object if the user exists
 */
const getExistingUser = async (username) => {
  const userResults = await db.query(
      userQueries.getUserByUsername(username),
  );

  if (userResults.rowCount !== 1) throw new UserInputError('Invalid user');

  return userResults.rows[0];
};

/**
 * Uses bcrypt to compare a plaintext password and a password hash
 * @param {*} passHash The hashed password
 * @param {*} passwordPlain The plaintext password
 * @return {Promise<boolean>} true if the passwords match
 */
const checkPasswordsMatch = async (passHash, passwordPlain) => {
  return await bcrypt.compare(passwordPlain, passHash);
};

module.exports = {
  userResolvers,
};
