const express = require("express");

// Import rute modular
const authRoutes = require("./authRoutes");
const tourRoutes = require("./tourRoutes");
const hotelRoutes = require("./hotelRoutes");
const discoverRoutes = require("./discoverRoutes");
const rentalRoutes = require("./rentalRoutes");

const router = express.Router();

// Atur rute
router.use("/auth", authRoutes);
router.use("/tour", tourRoutes);
router.use("/hotel", hotelRoutes);
router.use("/discover", discoverRoutes);
router.use("/rent", rentalRoutes);

module.exports = router;
