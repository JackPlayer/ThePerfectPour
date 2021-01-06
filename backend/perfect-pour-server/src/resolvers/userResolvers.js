const db = require('../db');
const bcrypt = require('bcrypt');
const {userQueries} = require('../queries');
const {v4: uuidv4} = require('uuid');

const userResolvers = {
  Query: {
    getUserFromUsername: async (root, {username}) => {
      if (username === undefined) return null;
      const userResults = await db
          .query(userQueries.getUserByUsername(username));
      if (userResults.rowCount === 0 ) return null;

      return {
        id: userResults.rows[0].id,
        username: userResults.rows[0].username,
        passHash: userResults.rows[0].pass_hash,
        email: userResults.rows[0].email,
      };
    },
  },

  Mutation: {
    createUser: async (root, {email, password, username}) => {
      const existingUserQuery = await db.query(
          userQueries.getUserByUsername(username),
      );

      if (existingUserQuery.rowCount !== 0 ||
        email.length === 0 ||
        password.length === 0 ||
        username.length === 0) return null;

      const saltRounds = 10;
      const passHash = await bcrypt.hash(password, saltRounds);
      const userID = uuidv4();
      const timeStamp = new Date(Date.now()).toISOString();

      await db.query(
          userQueries.newUser(passHash, userID, username, email, timeStamp),
      );

      return ( {
        id: userID,
        passHash,
        username,
        email,
      });
    },
  },
};

module.exports = {
  userResolvers,
};
