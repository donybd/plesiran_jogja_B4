const express = require("express");
const { getUsers, Register, Login, Logout, deleteUser, show } = require("../controllers/User/Users.js");
const { authenticateToken, authorizeAdmin } = require("../middleware/authMiddleware.js");
const { verifyToken } = require("../middleware/VerifyToken.js");
const { refreshToken } = require("../controllers/User/RefreshToken.js");

const router = express.Router();

router.get("/users", verifyToken, authenticateToken, authorizeAdmin, getUsers);
router.post("/users", Register); // tambah user
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.delete("/users/:id", deleteUser); // hapus user berdasarkan id
router.get("/users/:id", show); // mencari user berdasarkan id

module.exports = router;
