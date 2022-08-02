const mysql = require("mysql2");
require('dotenv').config();
/*
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});*/

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'root',
    database: 'cheeseriadb'
});

const dbConnection = connection.connect((err:Error) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

module.exports = dbConnection;