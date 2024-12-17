const db = require("../../config/database");
const path = require("path");
const fs = require("fs");

const uploadImage = (req, res) => {
  console.log("File:", req.file);
  console.log("Body:", req.body);

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (!allowedTypes.includes(req.file.mimetype)) {
    return res.status(400).json({ message: "Invalid file type. Only JPEG, PNG, JPG, or WEBP are allowed." });
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (req.file.size > maxSize) {
    return res.status(400).json({ message: "File size exceeds 5MB limit." });
  }

  const { id, name, email, phone, address } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ message: "ID, name, and email are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  const { filename } = req.file;

  const oldImageQuery = `SELECT profile_image FROM users WHERE id = ?`;
  db.query(oldImageQuery, [id], (err, results) => {
    if (err) {
      console.error("Error fetching old image:", err);
      return res.status(500).json({ message: "Failed to fetch old image." });
    }

    const oldImage = results[0]?.profile_image;
    if (oldImage) {
      const oldImagePath = path.join(__dirname, "../../public/image", oldImage);
      fs.unlink(oldImagePath, (err) => {
        if (err) console.error("Error deleting old image:", err);
      });
    }

    const sql = `
      UPDATE users
      SET name = ?, email = ?, phone = ?, address = ?, profile_image = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;
    db.query(sql, [name, email, phone || null, address || null, filename, id], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Internal server error." });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found." });
      }

      return res.json({
        status: "Success",
        message: "User updated successfully.",
        data: { id, name, email, phone, address, profile_image: filename },
      });
    });
  });
};

module.exports = { uploadImage };
