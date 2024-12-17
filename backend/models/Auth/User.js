// const db = require("../../config/database");
// const bcrypt = require("bcryptjs");

// class User {
//   static async create(user) {
//     const { name, email, password, address, phone, profile_image } = user; // Data input
//     const hashedPassword = await bcrypt.hash(password, 10); // Hash password

//     const newUser = {
//       name,
//       email,
//       password: hashedPassword,
//       address,
//       phone,
//       profile_image,
//     };

//     const sql = "INSERT INTO user SET ?";

//     return new Promise((resolve, reject) => {
//       db.query(sql, newUser, (err, result) => {
//         if (err) return reject(err);
//         resolve(result.insertId);
//       });
//     });
//   }

//   static findByEmail(email) {
//     const sql = `SELECT * FROM user WHERE email = ?`;
//     return new Promise((resolve, reject) => {
//       db.query(sql, [email], (err, result) => {
//         if (err) return reject(err);
//         resolve(result[0]);
//       });
//     });
//   }

//   static all() {
//     // Return a new Promise to handle asynchronous operation
//     return new Promise((resolve, reject) => {
//       // SQL query to select relevant columns from the 'user' table
//       const sql = "SELECT * FROM user ORDER BY id ASC";

//       // Execute the query on the database
//       db.query(sql, (err, results) => {
//         if (err) {
//           // Reject the promise in case of an error (optional: handle the error appropriately)
//           reject(err);
//         }
//         // Resolve the promise with the query results if successful
//         resolve(results);
//       });
//     });
//   }

//   static find(id) {
//     // Return a new Promise to handle asynchronous operation
//     return new Promise((resolve, reject) => {
//       // SQL query to select specific columns from the 'user' table where the 'id' matches the given ID
//       const sql = "SELECT * FROM user WHERE id = ?";

//       // Execute the query on the database, passing the 'id' parameter for the WHERE clause
//       db.query(sql, id, (err, result) => {
//         if (err) {
//           // Reject the promise if an error occurs during the query execution
//           reject(err);
//         }

//         // Destructure the result to get the first (and only) user record
//         const [user] = result;

//         // Resolve the promise with the user data
//         resolve(user);
//       });
//     });
//   }

//   static delete(id) {
//     // Create a new promise to handle the delete operation
//     return new Promise((resolve, reject) => {
//       // SQL query to delete a record from the 'user' table based on the provided 'id'
//       const sql = "DELETE FROM user WHERE id = ?"; // SQL query with a placeholder for the id
//       db.query(sql, id, (err, result) => {
//         if (err) {
//           // Reject the promise if there is an error during the delete operation
//           return reject(err);
//         }

//         // Resolve the promise with the result of the delete operation
//         resolve(result);
//       });
//     });
//   }
// }
// module.exports = User;
