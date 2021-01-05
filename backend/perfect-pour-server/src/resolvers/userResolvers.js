const { db } = require('../db')
const { bcrypt } = require('bcrypt')

const userResolvers = {
    Query: {
        getUser: (username) => {
            return null;
        },
    },

    Mutation: {
        createUser: async (root, {email, password, username}) => {
            const existingUserQuery = await db.query('SELECT username from accounts WHERE username=$1;', [username])
        
            if (existingUserQuery.rowCount !== 0 || email.length === 0 || password.length === 0 || username.length === 0) return null;
        
            const saltRounds = 10;
        
            const passHash = await bcrypt.hash(password, saltRounds)
            const userID = uuidv4();
            const timeStamp = new Date(Date.now()).toISOString()
            const insertQuery = `INSERT INTO accounts (
              id,
              username,
              email,
              pass_hash,
              created_on
            ) VALUES (
              $1,
              $2,
              $3,
              $4,
              $5
            );`
        
            const insertQueryResponse = await db.query(insertQuery, [userID, username, email, passHash,  timeStamp]);
            return ( {
              id: userID,
              passHash,
              username,
              email,
            })
          }
    },
}

module.exports = {
    userResolvers
}