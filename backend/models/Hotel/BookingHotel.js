const db = require("../../config/database");

class BookingHotel {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'hotel' table
      const sql = `SELECT booking_hotel.user_id as user_id, user.name as name, hotel.name_hotel as hotel, booking_hotel.check_in_date, booking_hotel.check_out_date, booking_hotel.guess_count,booking_hotel.room_count,booking_hotel.total_price
        FROM booking_hotel
        INNER JOIN user ON booking_hotel.user_id = user.id
        INNER JOIN hotel ON booking_hotel.hotel_id = hotel.id
        ORDER BY booking_hotel.id ASC
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
      // SQL query to select specific columns from the 'booking hotel' table where the 'id' matches the given ID
      const sql = `SELECT booking_hotel.user_id, user.name as name, hotel.name_hotel as hotel, booking_hotel.check_in_date, booking_hotel.check_out_date, booking_hotel.guess_count,booking_hotel.room_count,booking_hotel.total_price
        FROM booking_hotel
        INNER JOIN user ON booking_hotel.user_id = user.id
        INNER JOIN hotel ON booking_hotel.hotel_id = hotel.id
        WHERE booking_hotel.id = ?
        `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) booking hotel record
        const [booking_hotel] = result;

        // Resolve the promise with the booking hotel data
        resolve(booking_hotel);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'hotel' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'hotel' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO booking_hotel SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full booking hotel details using the generated 'id'
    const booking_hotel = await this.find(id);

    // Return the complete booking hotel data after insertion
    return booking_hotel;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'booking hotel' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE booking_hotel SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated booking hotel details using the 'id'
    const booking_hotel = await this.find(id);

    // Return the updated booking hotel data after fetching it
    return booking_hotel;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'booking hotel' table based on the provided 'id'
      const sql = "DELETE FROM booking_hotel WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = BookingHotel;
