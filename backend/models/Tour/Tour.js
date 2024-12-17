const db = require("../../config/database");

class Tour {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'tour' table
      const sql = "SELECT id, name_tour, duration, destination, price, facility, tour_image, image, history, day1_description, day2_description, day3_description, detail_price FROM tour ORDER BY id ASC";

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
      // SQL query to select specific columns from the 'tour' table where the 'id' matches the given ID
      const sql = "SELECT name_tour, duration, destination, price, facility, tour_image, image, history, day1_description, day2_description, day3_description, detail_price FROM tour WHERE id = ?";

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) tour record
        const [tour] = result;

        // Resolve the promise with the tour data
        resolve(tour);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'tour' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'tour' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO tour SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full tour details using the generated 'id'
    const tour = await this.find(id);

    // Return the complete tour data after insertion
    return tour;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'tour' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE tour SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated tour details using the 'id'
    const tour = await this.find(id);

    // Return the updated tour data after fetching it
    return tour;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'tour' table based on the provided 'id'
      const sql = "DELETE FROM tour WHERE id = ?"; // SQL query with a placeholder for the id
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

  static getTopFavorites() {
    return new Promise((resolve, reject) => {
      // Adjust this SQL query to sort by the appropriate column for popularity or price
      const sql = "SELECT id, name_tour, duration, destination, price, facility, tour_image, image, history, day1_description, day2_description, day3_description, detail_price FROM tour ORDER BY price DESC LIMIT 3";

      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }
}

module.exports = Tour;
