const express = require("express");
const DestinationCont = require("../controllers/Discover/Destination/DestinationCont");
const CulinaryController = require("../controllers/Discover/Culinery/CulineryCont");
const CultureController = require("../controllers/Discover/Culture/CultureCont");
// const authenticateJWT = require("../middleware/authenticateJWT");

const router = express.Router();

// Destination Routes
router.get("/dest", DestinationCont.index);
router.get("/dest/:id", DestinationCont.show);
router.post("/dest", DestinationCont.store);
router.put("/dest/:id", DestinationCont.update);
router.delete("/dest/:id", DestinationCont.destroy);

// Culinary Routes
router.get("/culinary", CulinaryController.index);
router.get("/culinary/:id", CulinaryController.show);
router.post("/culinary", CulinaryController.store);
router.put("/culinary/:id", CulinaryController.update);
router.delete("/culinary/:id", CulinaryController.destroy);

// Culture Routes
router.get("/culture", CultureController.index);
router.get("/culture/:id", CultureController.show);
router.post("/culture", CultureController.store);
router.put("/culture/:id", CultureController.update);
router.delete("/culture/:id", CultureController.destroy);

module.exports = router;
