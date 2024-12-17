const express = require("express");
const router = express.Router();

const HotelController = require("../controllers/Hotel/HotelController");
const DetailHotelController = require("../controllers/Hotel/DetailHotelController");
const ReviewHotelController = require("../controllers/Hotel/ReviewHotelController");
const RoomsController = require("../controllers/Hotel/RoomsController");
const BookingHotelController = require("../controllers/Hotel/BookingHotelController");
const FacilitiesController = require("../controllers/Hotel/FacilitiesController");

// Hotel Routes
router.get("/htl", HotelController.index);
router.get("/htl/:id", HotelController.show);
router.post("/htl", HotelController.store);
router.put("/htl/:id", HotelController.update);
router.delete("/htl/:id", HotelController.destroy);

// Hotel Details Routes
router.get("/detail_hotel", DetailHotelController.index); // Get all hotel details
router.get("/detail_hotel/:id", DetailHotelController.show); // Get a specific hotel detail by ID
router.post("/detail_hotel", DetailHotelController.store); // Create hotel details
router.put("/detail_hotel/:id", DetailHotelController.update); // Update hotel details
router.delete("/detail_hotel/:id", DetailHotelController.destroy); // Delete hotel details

// Hotel Reviews Routes
router.get("/review_hotel", ReviewHotelController.index); // Get all hotel reviews
router.get("/review_hotel/:id", ReviewHotelController.show); // Get a specific review by ID
router.post("/review_hotel", ReviewHotelController.store); // Create a new review
router.put("/review_hotel/:id", ReviewHotelController.update); // Update a review
router.delete("/review_hotel/:id", ReviewHotelController.destroy); // Delete a review

// Rooms Routes
router.get("/rooms", RoomsController.index);
router.get("/rooms/:id", RoomsController.show);
router.post("/rooms", RoomsController.store);
router.put("/rooms/:id", RoomsController.update);
router.delete("/rooms/:id", RoomsController.destroy);

// Booking Routes
router.post("/booking_hotel", BookingHotelController.store); // Create a hotel booking
router.get("/booking_hotel/:id", BookingHotelController.show); // Get a specific booking
router.put("/booking_hotel/:id", BookingHotelController.update); // Update a booking
router.get("/booking_hotel", BookingHotelController.index); // Get all bookings
router.delete("/booking_hotel/:id", BookingHotelController.destroy); // Delete a booking

// Facilities Routes
router.get("/facilities", FacilitiesController.index); // Get all facilities
router.get("/facilities/:id", FacilitiesController.show); // Get a specific facility by ID
router.post("/facilities", FacilitiesController.store); // Add a new facility
router.put("/facilities/:id", FacilitiesController.update); // Update a facility
router.delete("/facilities/:id", FacilitiesController.destroy);

module.exports = router;
