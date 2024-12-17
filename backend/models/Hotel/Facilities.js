const db = require("../../config/database");

class Facilities {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'facilities' table
      const sql = `SELECT name, description FROM facilities ORDER BY id ASC`;
      // Execute the query on the database
      db.query(sql, (err, results) => {
        if (err) {
          // Reject the promise in case of an error (optional: handle the error appropriately)
          reject(err);
        }
        // Resolve the promise with the query results if successful
        resolve(results);
      });
    });
  }

  static find(id) {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select specific columns from the 'facilities' table where the 'id' matches the given ID
      const sql = `SELECT name, description FROM facilities WHERE id = ?`;
      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) facilities record
        const [facilities] = result;

        // Resolve the promise with the facilities data
        resolve(facilities);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'facilities' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'facilities' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO facilities SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full facilities details using the generated 'id'
    const hotel = await this.find(id);

    // Return the complete hotel data after insertion
    return hotel;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'facilities' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE facilities SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated facilities details using the 'id'
    const hotel = await this.find(id);

    // Return the updated facilities data after fetching it
    return hotel;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'facilities' table based on the provided 'id'
      const sql = "DELETE FROM facilities WHERE id = ?"; // SQL query with a placeholder for the id
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the delete operation
          return reject(err);
        }

        // Resolve the promise with the result of the delete operation
        resolve(result);
      });
    });
  }
}

module.exports = Facilities;
