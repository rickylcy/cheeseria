const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

connection.connect((err:Error) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

  const query = `CREATE DATABASE IF NOT EXISTS cheeseriadb;`;
  connection.query(query, (err: any, results: any, fields: any) => {
      if (err) throw err
    
      console.log('The solution is: ', results)
    })

    const query2 = `CREATE TABLE IF NOT EXISTS cheeseriadb.cheeseria (id INT PRIMARY KEY AUTO_INCREMENT,items VARCHAR(500) NOT NULL,total decimal(10, 2) NOT NULL);`;
    connection.query(query2, (err: any, results: any, fields: any) => {
        if (err) throw err
      
        console.log('The solution is: ', results)
      })

module.exports = connection;