// import express from "express";
// import multer from "multer";
// import path from "path";
// import { uploadImage } from "./uploadController.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/img");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/upload", upload.single("image"), uploadImage);

// export default router;
