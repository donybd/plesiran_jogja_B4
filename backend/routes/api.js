// const TourControlller = require("../controllers/Tour/TourController");
// const DetailTourController = require("../controllers/Tour/DetailTourController");
// const BookingTourController = require("../controllers/Tour/BookingTourController");
// const HotelController = require("../controllers/Hotel/HotelController");
// const DetailHotelController = require("../controllers/Hotel/DetailHotelController");
// const ReviewHotelController = require("../controllers/Hotel/ReviewHotelController");
// const RoomsController = require("../controllers/Hotel/RoomsController");
// const BookingHotelController = require("../controllers/Hotel/BookingHotelController");
// const FacilitiesController = require("../controllers/Hotel/FacilitiesController");
// const VehicleController = require("../controllers/Rental/VehicleController");
// const ReviewRentalController = require("../controllers/Rental/ReviewRentalController");
// const BookingRentalController = require("../controllers/Rental/BookingRentalController");
// const UserController = require("../controllers/auth/UserController");
// const authenticateJWT = require("../middleware/authenticateJWT");
// const authenticateAdmin = require("../middleware/authenticateAdmin");
// const AuthController = require("../controllers/auth/AuthController");
// const DestinationCont = require("../controllers/Discover/Destination/DestinationCont");
// const CulineryCont = require("../controllers/Discover/Culinery/CulineryCont");
// const CultureCont = require("../controllers/Discover/Culture/CultureCont");
// import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
// import { authenticateToken, authorizeAdmin } from "../middleware/authMiddleware.js";
// import { verifyToken } from "../middleware/VerifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

// // const DetDestination = require("../controllers/Discover/Destination/DetDestinationCont");
// // const EnFeesCont = require("../controllers/Discover/Destination/EnFeesCont");
// // const CategoryController = require("../controllers/Discover/Destination/CategoryController");

// const express = require("express");
// const router = express.Router();

// router.post("/register", AuthController.register);
// router.post("/login", AuthController.login);
// router.post("/logout", authenticateJWT, AuthController.logout);

// router.get("/user", authenticateJWT, authenticateAdmin, UserController.index);
// router.get("/user/:id", authenticateJWT, authenticateAdmin, UserController.show);
// router.delete("/user/:id", authenticateJWT, authenticateAdmin, UserController.destroy);

// router.get("/tour", TourControlller.index);
// router.get("/tour/:id", TourControlller.show);
// router.post("/tour", authenticateJWT, authenticateAdmin, TourControlller.store);
// router.put("/tour/:id", authenticateJWT, authenticateAdmin, TourControlller.update);
// router.delete("/tour/:id", authenticateJWT, authenticateAdmin, TourControlller.destroy);

// router.get("/detail_tour", DetailTourController.index);
// router.get("/detail_tour/:id", DetailTourController.show);
// router.post("/detail_tour", authenticateJWT, authenticateAdmin, DetailTourController.store);
// router.put("/detail_tour/:id", authenticateJWT, authenticateAdmin, DetailTourController.update);
// router.delete("/detail_tour/:id", authenticateJWT, authenticateAdmin, DetailTourController.destroy);

// router.post("/booking_tour", authenticateJWT, BookingTourController.store);
// router.put("/booking_tour/:id", authenticateJWT, BookingTourController.update);
// router.delete("/booking_tour/:id", authenticateJWT, authenticateAdmin, BookingTourController.destroy);
// router.get("/booking_tour", authenticateJWT, authenticateAdmin, BookingTourController.index);
// router.get("/booking_tour/:id", authenticateJWT, BookingTourController.show);

// router.get("/hotel", HotelController.index);
// router.get("/hotel/:id", HotelController.show);
// router.post("/hotel", authenticateJWT, authenticateAdmin, HotelController.store);
// router.put("/hotel/:id", authenticateJWT, authenticateAdmin, HotelController.update);
// router.delete("/hotel/:id", authenticateJWT, authenticateAdmin, HotelController.destroy);

// router.get("/detail_hotel", DetailHotelController.index);
// router.get("/detail_hotel/:id", DetailHotelController.show);
// router.post("/detail_hotel", authenticateJWT, authenticateAdmin, DetailHotelController.store);
// router.put("/detail_hotel/:id", authenticateJWT, authenticateAdmin, DetailHotelController.update);
// router.delete("/detail_hotel/:id", authenticateJWT, authenticateAdmin, DetailHotelController.destroy);

// router.get("/review_hotel", ReviewHotelController.index);
// router.get("/review_hotel/:id", ReviewHotelController.show);
// router.post("/review_hotel", authenticateJWT, ReviewHotelController.store);
// router.put("/review_hotel/:id", authenticateJWT, ReviewHotelController.update);
// router.delete("/review_hotel/:id", authenticateJWT, authenticateAdmin, ReviewHotelController.destroy);

// router.get("/rooms", RoomsController.index);
// router.get("/rooms/:id", RoomsController.show);
// router.post("/rooms", authenticateJWT, authenticateAdmin, RoomsController.store);
// router.put("/rooms/:id", authenticateJWT, authenticateAdmin, RoomsController.update);
// router.delete("/rooms/:id", authenticateJWT, authenticateAdmin, RoomsController.destroy);

// router.post("/booking_hotel", authenticateJWT, BookingHotelController.store);
// router.get("/booking_hotel/:id", authenticateJWT, BookingHotelController.show);
// router.put("/booking_hotel/:id", authenticateJWT, BookingHotelController.update);
// router.get("/booking_hotel", authenticateJWT, authenticateAdmin, BookingHotelController.index);
// router.delete("/booking_hotel/:id", authenticateJWT, authenticateAdmin, BookingHotelController.destroy);

// router.get("/facilities", FacilitiesController.index);
// router.get("/facilities/:id", FacilitiesController.show);
// router.post("/facilities", authenticateJWT, authenticateAdmin, FacilitiesController.store);
// router.put("/facilities/:id", authenticateJWT, authenticateAdmin, FacilitiesController.update);
// router.delete("/facilities/:id", authenticateJWT, authenticateAdmin, FacilitiesController.destroy);

// router.get("/vehicle", VehicleController.index);
// // router.post("/vehicle", upload.single("vehicle_image"), VehicleController.store);
// router.post("/vehicle", authenticateJWT, authenticateAdmin, VehicleController.store);
// router.get("/vehicle/:id", VehicleController.show);
// router.put("/vehicle/:id", authenticateJWT, authenticateAdmin, VehicleController.update);
// router.delete("/vehicle/:id", authenticateJWT, authenticateAdmin, VehicleController.destroy);

// router.get("/review_rental", ReviewRentalController.index);
// router.post("/review_rental", authenticateJWT, ReviewRentalController.store);
// router.get("/review_rental/:id", ReviewRentalController.show);
// router.put("/review_rental/:id", authenticateJWT, ReviewRentalController.update);
// router.delete("/review_rental/:id", authenticateJWT, authenticateAdmin, ReviewRentalController.destroy);

// router.get("/booking_rental", BookingRentalController.index);
// router.post("/booking_rental", authenticateJWT, BookingRentalController.store);
// router.get("/booking_rental/:id", authenticateJWT, BookingRentalController.show);
// router.put("/booking_rental/:id", authenticateJWT, BookingRentalController.update);
// router.delete("/booking_rental/:id", authenticateJWT, authenticateAdmin, BookingRentalController.destroy);

// router.get("/dest", DestinationCont.index);
// router.post("/dest", DestinationCont.store);
// router.get("/dest/:id", DestinationCont.show);
// router.put("/dest/:id", DestinationCont.update);
// router.delete("/dest/:id", DestinationCont.destroy);

// router.get("/culiner", CulineryCont.index);
// router.post("/culiner", CulineryCont.store);
// router.get("/culiner/:id", CulineryCont.show);
// router.put("/culiner/:id", CulineryCont.update);
// router.delete("/culiner/:id", CulineryCont.destroy);

// router.get("/cult", CultureCont.index);
// router.post("/cult", CultureCont.store);
// router.get("/cult/:id", CultureCont.show);
// router.put("/cult/:id", CultureCont.update);
// router.delete("/cult/:id", CultureCont.destroy);

// // router.get("/det_dest", DetDestination.index);
// // router.post("/det_dest", DetDestination.store);
// // router.get("/det_dest/:id", DetDestination.show);
// // router.put("/det_dest/:id", DetDestination.update);
// // router.delete("/det_dest/:id", DetDestination.delete);

// // router.get("/det_dest/:id/images", DetDestination.showImages);
// // router.post("/det_dest/:id/images", DetDestination.addWithImage);
// // router.put("/detdest_images/:id", DetDestination.updateImageById);
// // router.delete("/detdest_images/:id", DetDestination.deleteImageById);

// // router.get("/fee", EnFeesCont.index);
// // router.post("/fee", EnFeesCont.store);
// // router.get("/fee/:id", EnFeesCont.show);
// // router.put("/fee/:id", EnFeesCont.update);
// // router.delete("/fee/:id", EnFeesCont.destroy);

// module.exports = router;
