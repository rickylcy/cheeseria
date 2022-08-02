const mysql = require("mysql");
require('dotenv').config();

/*
// local db
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
cheeseriadb@
@Aa12345
*/

const connection = mysql.createConnection({
  host: 'cheeseria-1.cbknyf9gvk5y.us-east-1.rds.amazonaws.com',
  database: 'cheeseria',
  user: 'admin',
  password: 'password',
  port: '3306'
});

connection.connect((err:Error) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

module.exports = connection;