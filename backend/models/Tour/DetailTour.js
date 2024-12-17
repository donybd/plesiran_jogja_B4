const db = require("../../config/database");

class DetailTour {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'detail_tour' table
      const sql = `
      SELECT detail_tour.image, tour.name_tour as tour_name, detail_tour.history,
      detail_tour.day1_description, detail_tour.day2_description, detail_tour.day3_description, 
      detail_tour.detail_price
      FROM detail_tour
      INNER JOIN tour ON detail_tour.tour_id = tour.id
      ORDER BY detail_tour.id ASC
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
      // SQL query to select specific columns from the 'detail_tour' table where the 'id' matches the given ID
      const sql = ` SELECT detail_tour.image, tour.name_tour as tour_name, detail_tour.history,
      detail_tour.day1_description, detail_tour.day2_description, detail_tour.day3_description, 
      detail_tour.detail_price
      FROM detail_tour
      INNER JOIN tour ON detail_tour.tour_id = tour.id 
      WHERE detail_tour.id = ?`;

      //  // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) detail_tour record
        const [detail_tour] = result;

        // Resolve the promise with the detail_tour data
        resolve(detail_tour);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'detail_tour' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'detail_tour' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO detail_tour SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }

        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full detail_tour details using the generated 'id'
    const detail_tour = this.find(id);

    // Return the complete tour data after insertion
    return detail_tour;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'detail_tour' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE detail_tour SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }

        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated detail_tour details using the 'id'
    const detail_tour = await this.find(id);

    // Return the updated detail_tour data after fetching it
    return detail_tour;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'detail_tour' table based on the provided 'id'
      const sql = "DELETE FROM detail_tour WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = DetailTour;
