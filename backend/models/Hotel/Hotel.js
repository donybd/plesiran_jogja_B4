const db = require("../../config/database");

class Hotel {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT hotel.id, hotel.name_hotel, hotel.address, hotel.rating, hotel.description, hotel.hotel_image, rooms.room_type as room
        FROM hotel
        LEFT JOIN rooms ON hotel.rooms_id = rooms.id
        ORDER BY hotel.id ASC`;

      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT hotel.name_hotel, hotel.address, hotel.rating, hotel.description, hotel.hotel_image, rooms.room_type as room
        FROM hotel
        LEFT JOIN rooms ON hotel.rooms_id = rooms.id
        WHERE hotel.id = ?`;

      db.query(sql, id, (err, result) => {
        if (err) {
          reject(err);
        }

        const [hotel] = result;
        resolve(hotel);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO hotel SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result.insertId);
      });
    });

    const hotel = await this.find(id);
    return hotel;
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE hotel SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });

    const hotel = await this.find(id);
    return hotel;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM hotel WHERE id = ?";
      db.query(sql, id, (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = Hotel;
