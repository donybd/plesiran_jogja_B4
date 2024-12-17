const db = require("../../config/database");

class DetailHotel {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'detail hotel' table
      const sql = `SELECT hotel.name_hotel, rooms.room_type, detail_hotel.location, review_hotel.comment as comment, user.name as name 
        FROM detail_hotel
        INNER JOIN hotel ON detail_hotel.hotel_id = hotel.id
        INNER JOIN rooms ON hotel.rooms_id = rooms.id
        INNER JOIN review_hotel ON detail_hotel.review_hotel_id = review_hotel.id
        INNER JOIN user ON review_hotel.user_id = user.id 
        ORDER BY detail_hotel.id ASC
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
      // SQL query to select specific columns from the 'detail hotel' table where the 'id' matches the given ID
      const sql = `SELECT hotel.name_hotel, rooms.room_type, detail_hotel.location, review_hotel.comment as comment, user.name as name 
      FROM detail_hotel
      INNER JOIN hotel ON detail_hotel.hotel_id = hotel.id
      INNER JOIN rooms ON detail_hotel.rooms_id = rooms.id
      INNER JOIN review_hotel ON detail_hotel.review_hotel_id = review_hotel.id
      INNER JOIN user ON review_hotel.user_id = user.id 
      WHERE detail_hotel.id = ?
      `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) detail hotel record
        const [detail_hotel] = result;

        // Resolve the promise with the detail hotel data
        resolve(detail_hotel);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'detail hotel' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'detail hotel' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO detail_hotel SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full detail hotel details using the generated 'id'
    const detail_hotel = await this.find(id);

    // Return the complete hotel data after insertion
    return detail_hotel;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'detail hotel' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE detail_hotel SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated detail hotel details using the 'id'
    const detail_hotel = await this.find(id);

    // Return the updated detail hotel data after fetching it
    return detail_hotel;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'detail hotel' table based on the provided 'id'
      const sql = "DELETE FROM detail_hotel WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = DetailHotel;
