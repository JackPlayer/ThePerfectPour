/**
 * PostgreSQL Database Connection
 */
require('dotenv').config()
const { Pool } = require('pg');

console.log('Connecting to PostgreSQL Database...')

const pool = new Pool({
  connectionString: process.env.DB_URL,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}