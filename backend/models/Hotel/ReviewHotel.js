const db = require("../../config/database");

class ReviewHotel {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'review hotel' table
      const sql = `SELECT user.name as name, hotel.name_hotel, review_hotel.rating, review_hotel.date, review_hotel.comment
        FROM review_hotel
        INNER JOIN user ON review_hotel.user_id = user.id
        INNER JOIN hotel ON review_hotel.hotel_id = hotel.id
        ORDER BY review_hotel.id ASC
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
      // SQL query to select specific columns from the 'review hotel' table where the 'id' matches the given ID
      const sql = `SELECT review_hotel.user_id, user.name as name, hotel.name_hotel, review_hotel.rating, review_hotel.date, review_hotel.comment
      FROM review_hotel
      INNER JOIN user ON review_hotel.user_id = user.id
      INNER JOIN hotel ON review_hotel.hotel_id = hotel.id
      WHERE review_hotel.id = ?
      `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) review hotel record
        const [review_hotel] = result;

        // Resolve the promise with the review hotel data
        resolve(review_hotel);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'review hotel' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'review hotel' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO review_hotel SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full review hotel details using the generated 'id'
    const review_hotel = await this.find(id);

    // Return the complete review hotel data after insertion
    return review_hotel;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'review hotel' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE review_hotel SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated review hotel details using the 'id'
    const review_hotel = await this.find(id);

    // Return the updated review hotel data after fetching it
    return review_hotel;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'review hotel' table based on the provided 'id'
      const sql = "DELETE FROM review_hotel WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = ReviewHotel;
