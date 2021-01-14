/**
 * PostgreSQL Database Connection
 */
require('dotenv').config();
const {Pool} = require('pg');

console.log('Connecting to PostgreSQL Database...');
const pool = new Pool({
  connectionString: process.env.DB_URL,
});

module.exports = {
  async query(text, params) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', {text, duration, rows: res.rowCount});
    return res;
  },
};
