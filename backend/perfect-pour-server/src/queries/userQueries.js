const getUserByUsername = (username) => {
  const text = 'SELECT * FROM accounts WHERE username=$1';
  const values = [username];
  return {
    text,
    values,
  };
};

const getUserByEmail = (email) => {
  const text = 'SELECT * FROM accounts WHERE email=$1';
  const values = [email];
  return {
    text,
    values,
  };
};

const getUserByEmailOrUsername = (username, email) => {
  const text = 'SELECT * FROM accounts WHERE email=$1 OR username=$2';
  const values = [email, username];
  return {
    text,
    values,
  };
};

const newUser = (hashedPassword, userid, username, email, createdOn) => {
  const text = `INSERT INTO 
                  accounts(id, username, pass_hash, email, created_on)
                VALUES ($1, $2, $3, $4, $5)`;

  const values = [userid, username, hashedPassword, email, createdOn];

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
    newUser,
  },
};
