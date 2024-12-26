
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'srv691.hstgr.io',
  user: 'u817008098_claudia',
  password: '!QgzeKuUrGh6',
  database: 'u817008098_claudia',}).promise();


module.exports = pool;
