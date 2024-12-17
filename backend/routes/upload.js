const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadImage } = require("../controllers/upload/uploadController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("image"), uploadImage);

module.exports = router;
