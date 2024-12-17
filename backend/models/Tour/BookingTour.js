const db = require("../../config/database");

class BookingTour {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'booking_tour' table
      const sql = `
      SELECT booking_tour.user_id as id_user, user.name as name, tour.name_tour as tour_name, booking_tour.amount_people,
     booking_tour.price, booking_tour.as_name
      FROM booking_tour
      INNER JOIN user ON booking_tour.user_id = user.id
      INNER JOIN tour ON booking_tour.tour_id = tour.id
      ORDER BY booking_tour.id ASC
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
      // SQL query to select specific columns from the 'booking tour' table where the 'id' matches the given ID
      const sql = `
      SELECT booking_tour.user_id, user.name as name, tour.name_tour as tour_name, booking_tour.amount_people,
     booking_tour.price, booking_tour.as_name
      FROM booking_tour
      INNER JOIN user ON booking_tour.user_id = user.id
      INNER JOIN tour ON booking_tour.tour_id = tour.id
      WHERE booking_tour.id = ?
    `;
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
    // Insert the new tour data into the 'booking tour' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'booking tour' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO booking_tour SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full booking tour details using the generated 'id'
    const tour = await this.find(id);

    // Return the complete booking tour data after insertion
    return tour;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'booking tour' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE booking_tour SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated booking tour details using the 'id'
    const tour = await this.find(id);

    // Return the updated booking tour data after fetching it
    return tour;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'booking tour' table based on the provided 'id'
      const sql = "DELETE FROM booking_tour WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = BookingTour;
