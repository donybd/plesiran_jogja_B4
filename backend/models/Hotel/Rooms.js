const db = require("../../config/database");

class Rooms {
  static all() {
    // Return a new Promise to handle asynchronous operation
    return new Promise((resolve, reject) => {
      // SQL query to select relevant columns from the 'rooms' table
      const sql = `SELECT facilities.name as facilities, rooms.room_type, rooms.max_guest, rooms.price,rooms.rating,rooms.image_room
        FROM rooms
        INNER JOIN facilities ON rooms.facilities_id = facilities.id
        ORDER BY rooms.id ASC
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
      // SQL query to select specific columns from the 'rooms' table where the 'id' matches the given ID
      const sql = `SELECT facilities.name as facilities, rooms.room_type, rooms.max_guest, rooms.price,rooms.rating,rooms.image_room
      FROM rooms
      INNER JOIN facilities ON rooms.facilities_id = facilities.id
      WHERE rooms.id = ?
      `;

      // Execute the query on the database, passing the 'id' parameter for the WHERE clause
      db.query(sql, id, (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the query execution
          reject(err);
        }

        // Destructure the result to get the first (and only) rooms record
        const [rooms] = result;

        // Resolve the promise with the rooms data
        resolve(rooms);
      });
    });
  }

  static async create(data) {
    // Insert the new tour data into the 'rooms' table
    const id = await new Promise((resolve, reject) => {
      // SQL query to insert the 'rooms' table. The '?' placeholders will be replaced with the data
      const sql = "INSERT INTO rooms SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          // Reject the promise if there is an error during the insert operation
          return reject(err);
        }
        // Resolve with the 'insertId', which is the ID of the newly inserted record
        resolve(result.insertId);
      });
    });

    // After insertion, fetch the full rooms details using the generated 'id'
    const rooms = await this.find(id);

    // Return the complete rooms data after insertion
    return rooms;
  }

  static async update(id, data) {
    // Create a new promise to handle the database update operation
    await new Promise((resolve, reject) => {
      // SQL query to update the 'rooms' table. The '?' placeholders will be replaced with the data and id
      const sql = "UPDATE rooms SET ? WHERE id = ?"; // Update query, replacing '?' with data and id
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          // Reject the promise if an error occurs during the update
          return reject(err);
        }
        // Resolve the promise with the result of the update query (i.e., the result of the update operation)
        resolve(result);
      });
    });

    // After the update, fetch the updated rooms details using the 'id'
    const rooms = await this.find(id);

    // Return the updated rooms data after fetching it
    return rooms;
  }

  static delete(id) {
    // Create a new promise to handle the delete operation
    return new Promise((resolve, reject) => {
      // SQL query to delete a record from the 'rooms' table based on the provided 'id'
      const sql = "DELETE FROM rooms WHERE id = ?"; // SQL query with a placeholder for the id
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

module.exports = Rooms;
