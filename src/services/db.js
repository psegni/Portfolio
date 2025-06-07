const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'portfolio',
  password: '1111', // Replace with your actual password
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}; 