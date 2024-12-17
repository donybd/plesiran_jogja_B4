// // import mysql
// const mysql = require("mysql");

// // import dotenv dan menjalankan method config
// require("dotenv").config();

// // destructing object process.env
// const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

// /**
//  * Membuat koneksi database menggunakan method createConnection
//  * Method menerima parameter object: host, user, password, database
//  */
// const db = mysql.createConnection({
//   host: DB_HOST,
//   user: DB_USERNAME,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
// });

// /**
//  * Menghubungkan ke database menggunakan method connect
//  * Menerima parameter callback
//  */
// db.connect((err) => {
//   if (err) {
//     console.log("Error connecting " + err.stack);
//     return;
//   } else {
//     console.log("Connected to database " + DB_DATABASE);
//     return;
//   }
// });

// module.exports = db;

const mysql = require("mysql");
const { promisify } = require("util");
require("dotenv").config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
    return;
  }
  console.log("Connected to database:", DB_DATABASE);
});

// Mendukung async/await untuk db.query
db.query = promisify(db.query);

module.exports = db;
