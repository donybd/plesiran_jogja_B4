const db = require("../../config/database");

class ReviewRental {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'review rental' table
      const sql = `SELECT user.name, vehicle.vehicle_name, review_rental.rating, review_rental.comment, review_rental.date
      FROM review_rental  
      INNER JOIN user ON review_rental.user_id = user.id
      INNER JOIN vehicle ON review_rental.vehicle_id = vehicle.id
      ORDER BY review_rental.id ASC
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
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select specific columns from the 'review rental' table where the 'id' matches the given ID
      const sql = `SELECT review_rental.user_id, user.name, vehicle.vehicle_name, review_rental.rating, review_rental.comment, review_rental.date
      FROM review_rental  
      INNER JOIN user ON review_rental.user_id = user.id
      INNER JOIN vehicle ON review_rental.vehicle_id = vehicle.id
      WHERE review_rental.id = ?
      `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) detail review rental record
        const [review_rental] = result;

        // Resolve the promise with the hotel data
        resolve(review_rental);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'vehicle' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'review rental' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO review_rental SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full review rental details using the generated 'id'
    const review_rental = await this.find(id);

    // Return the complete review rental data after insertion
    return review_rental;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'review rental' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE review_rental SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated review rental details using the 'id'
    const review_rental = await this.find(id);

    // Return the updated review rental data after fetching it
    return review_rental;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'detail vehicle' table based on the provided 'id'
      const sql = "DELETE FROM review_rental WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = ReviewRental;
