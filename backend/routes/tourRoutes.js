const express = require("express");
const TourController = require("../controllers/Tour/TourController");
const DetailTourController = require("../controllers/Tour/DetailTourController");
const BookingTourController = require("../controllers/Tour/BookingTourController");
// const authenticateJWT = require("../middleware/authenticateJWT");
// const authenticateAdmin = require("../middleware/authenticateAdmin");

const router = express.Router();

router.get("/list", TourController.index);
router.get("/list:id", TourController.show);
router.post("/list", TourController.store);
router.put("/list:id", TourController.update);
router.delete("/list:id", TourController.destroy);
router.get("/fav", TourController.getFavorites);

router.get("/details", DetailTourController.index);
router.get("/details/:id", DetailTourController.show);
router.post("/details", DetailTourController.store);
router.put("/details/:id", DetailTourController.update);
router.delete("/details/:id", DetailTourController.destroy);

router.post("/booking", BookingTourController.store);
router.get("/booking", BookingTourController.index);
router.get("/booking/:id", BookingTourController.show);
router.put("/booking/:id", BookingTourController.update);
router.delete("/booking/:id", BookingTourController.destroy);

module.exports = router;
