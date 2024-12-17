const db = require("../../config/database");

class Vehicle {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'vehicle' table
      const sql = `SELECT id,vehicle_name, category, type_vehicle, transmission_type, manufacture_year, seating_capacity, fuel_type, rating, price, vehicle_image
        FROM vehicle
        ORDER BY id ASC
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
      // SQL query to select specific columns from the 'vehicle' table where the 'id' matches the given ID
      const sql = `SELECT vehicle_name, category, type_vehicle, transmission_type, manufacture_year, seating_capacity, fuel_type, rating, price, vehicle_image
      FROM vehicle
      WHERE id = ?
      `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) vehicle record
        const [vehicle] = result;

        // Resolve the promise with the hotel data
        resolve(vehicle);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'vehicle' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'vehicle' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO vehicle SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full vehicle details using the generated 'id'
    const vehicle = await this.find(id);

    // Return the complete vehicle data after insertion
    return vehicle;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'vehicle' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE vehicle SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated vehicle details using the 'id'
    const vehicle = await this.find(id);

    // Return the updated vehicle data after fetching it
    return vehicle;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'vehicle' table based on the provided 'id'
      const sql = "DELETE FROM vehicle WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = Vehicle;
