const db = require("../../../config/database");

class CultureModels {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'Culture' table
      const sql = `SELECT culture_id, name, description, image_budaya
      FROM culture
      ORDER BY culture_id ASC
        `;
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
    return new Promise((resolve, reject) => {
      const sql = `SELECT name, description, image_budaya
        FROM culture
        WHERE culture_id = ?`;

      db.query(sql, id, (err, result) => {
        if (err) {
          return reject(err);
        }

        if (!Array.isArray(result) || result.length === 0) {
          return reject(new Error("Data tidak ditemukan."));
        }

        const [culture] = result;
        resolve(culture);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'Culture' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'Culture' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO culture SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full Culture details using the generated 'id'
    const culture = await this.find(id);

    // Return the complete Culture data after insertion
    return culture;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'Culture' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE culture SET ? WHERE culture_id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated Culture details using the 'id'
    const culture = await this.find(id);

    // Return the updated Culture data after fetching it
    return culture;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'Culture' table based on the provided 'id'
      const sql = "DELETE FROM culture WHERE culture_id = ?"; // SQL query with a placeholder for the id
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

module.exports = CultureModels;
