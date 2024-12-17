const express = require("express");
const router = express.Router();

// Middleware untuk otentikasi dan otorisasi
// const authenticateJWT = require("../middleware/authenticateJWT");
// const authenticateAdmin = require("../middleware/authenticateAdmin");

// Import controller untuk Rental
const VehicleController = require("../controllers/Rental/VehicleController");
const ReviewRentalController = require("../controllers/Rental/ReviewRentalController");
const BookingRentalController = require("../controllers/Rental/BookingRentalController");

// Rute untuk kendaraan (Vehicle)
router.get("/vehicle", VehicleController.index);
router.get("/vehicle/:id", VehicleController.show);
router.post("/vehicle", VehicleController.store);
router.put("/vehicle/:id", VehicleController.update);
router.delete("/vehicle/:id", VehicleController.destroy);

// Rute untuk review rental (ReviewRental)
router.get("/review_rental", ReviewRentalController.index);
router.get("/review_rental/:id", ReviewRentalController.show);
router.post("/review_rental", ReviewRentalController.store);
router.put("/review_rental/:id", ReviewRentalController.update);
router.delete("/review_rental/:id", ReviewRentalController.destroy);

// Rute untuk booking rental (BookingRental)
router.get("/booking_rental", BookingRentalController.index);
router.get("/booking_rental/:id", BookingRentalController.show);
router.post("/booking_rental", BookingRentalController.store);
router.put("/booking_rental/:id", BookingRentalController.update);
router.delete("/booking_rental/:id", BookingRentalController.destroy);

module.exports = router;
