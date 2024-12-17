const db = require("../../config/database");

class DetailVehicle {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'detail vehicle' table
      const sql = `vehicle.vehicle_name, detail_vehicle.start_date, end_date, total_price, transmission_type, seating_capacity, manufacture_year, engine_capacity, fuel_type, pick_up_location, important_info, image
      FROM detail_vehicle  
      INNER JOIN vehicle ON detail_vehicle.vehicle_id = vehicle.id
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
      // SQL query to select specific columns from the 'detail vehicle' table where the 'id' matches the given ID
      const sql = `vehicle.vehicle_name, detail_vehicle.start_date, end_date, total_price, transmission_type, seating_capacity, manufacture_year, engine_capacity, fuel_type, pick_up_location, important_info, image
      FROM detail_vehicle  
      INNER JOIN vehicle ON detail_vehicle.vehicle_id = vehicle.id
      WHERE detail_vehicle.id = ?
      `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) detail vehicle record
        const [detail_vehicle] = result;

        // Resolve the promise with the hotel data
        resolve(detail_vehicle);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'vehicle' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'detail vehicle' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO detail_vehicle SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full detail vehicle details using the generated 'id'
    const detail_vehicle = await this.find(id);

    // Return the complete detail vehicle data after insertion
    return detail_vehicle;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'detail vehicle' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE detail_vehicle SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated detail vehicle details using the 'id'
    const detail_vehicle = await this.find(id);

    // Return the updated detail vehicle data after fetching it
    return detail_vehicle;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'detail vehicle' table based on the provided 'id'
      const sql = "DELETE FROM detail_vehicle WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = DetailVehicle;
