const db = require("../../../config/database");

class DestinationModels {
  // Mengambil semua destinasi
  static all() {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT id_dest, name_dest, image2_dest, image3_dest, nama_category, image_destination, description, opening_hours, 
               facilities, additional_information, travel_tips, harga_adult_domestic, 
               harga_adult_international, harga_child_domestic, harga_child_international,favorite
        FROM destination
        ORDER BY id_dest ASC
      `;
      db.query(sql, (err, results) => {
        if (err) {
          console.error("Database error:", err);
          return reject(err);
        }
        resolve(results);
      });
    });
  }

  // Mencari destinasi berdasarkan id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT id_dest, name_dest, image2_dest, image3_dest, nama_category, image_destination, description, opening_hours, 
               facilities, additional_information, travel_tips, harga_adult_domestic, 
               harga_adult_international, harga_child_domestic, harga_child_international
        FROM destination
        WHERE id_dest = ?
      `;
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return reject(err);
        }
        if (result.length === 0) {
          return reject(new Error("Destination not found"));
        }
        resolve(result[0]);
      });
    });
  }

  // Menambahkan destinasi baru
  static async create(data) {
    if (!data.name_dest || !data.nama_category) {
      throw new Error("Missing required fields");
    }

    const sql = "INSERT INTO destination SET ?";
    return new Promise((resolve, reject) => {
      db.query(sql, data, (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return reject(err);
        }
        resolve(this.find(result.insertId));
      });
    });
  }

  // Memperbarui data destinasi
  static async update(id, data) {
    if (!data.name_dest || !data.nama_category) {
      throw new Error("Missing required fields");
    }

    const sql = "UPDATE destination SET ? WHERE id_dest = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, [data, id], (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return reject(err);
        }
        if (result.affectedRows === 0) {
          return reject(new Error("Destination not found"));
        }
        resolve(this.find(id));
      });
    });
  }

  // Menghapus destinasi
  static delete(id) {
    const sql = "DELETE FROM destination WHERE id_dest = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return reject(err);
        }
        if (result.affectedRows === 0) {
          return reject(new Error("Destination not found"));
        }
        resolve({ message: "Destination deleted successfully" });
      });
    });
  }
}

module.exports = DestinationModels;
