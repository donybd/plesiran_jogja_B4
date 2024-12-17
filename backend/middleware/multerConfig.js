// const multer = require("multer");
// const path = require("path");

// // Konfigurasi penyimpanan file
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "img/"); // Lokasi direktori untuk menyimpan file
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// // Filter file untuk memastikan hanya menerima file gambar
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpeg|jpg|png/;
//   const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = allowedTypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb(new Error("Only images are allowed (jpeg, jpg, png)."));
//   }
// };

// // Middleware Multer
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 2 * 1024 * 1024 }, // Batas ukuran file (2 MB)
// });

// module.exports = upload;

// // public/img
