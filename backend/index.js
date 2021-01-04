/**
 * Server for perfect pour application
 */
require('dotenv').config()

 const { Pool } = require('pg');
 const pool = new Pool({
   connectionString: process.env.DB_URL,
 })

 pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
 })