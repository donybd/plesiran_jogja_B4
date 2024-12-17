const db = require("../../../config/database");

class CulineryModels {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'Culinery' table
      const sql = `SELECT id_cul, name, category, description, image_1, image_2, location
      FROM culinary
      ORDER BY id_cul ASC
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
      const sql = `SELECT name, category, description, image_1, image_2, location
        FROM culinary
        WHERE id_cul = ?`;

      db.query(sql, id, (err, result) => {
        if (err) {
          return reject(err);
        }

        if (!Array.isArray(result) || result.length === 0) {
          return reject(new Error("Data tidak ditemukan."));
        }

        const [culinery] = result;
        resolve(culinery);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'Culinery' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'Culinery' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO culinary SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full Culinery details using the generated 'id'
    const culinery = await this.find(id);

    // Return the complete Culinery data after insertion
    return culinery;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'Culinery' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE culinary SET ? WHERE id_cul = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated Culinery details using the 'id'
    const culinery = await this.find(id);

    // Return the updated Culinery data after fetching it
    return culinery;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'Culinery' table based on the provided 'id'
      const sql = "DELETE FROM culinary WHERE id_cul = ?"; // SQL query with a placeholder for the id
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

module.exports = CulineryModels;
