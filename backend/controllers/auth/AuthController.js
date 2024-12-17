// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const User = require("../../models/Auth/User");

// class AuthController {
//   static async register(req, res) {
//     try {
//       const { name, email, password, address, phone, profil_image } = req.body;
//       if (!name || !email || !password) {
//         // If any field is missing, return a 422 Unprocessable Entity status
//         return res.status(422).json({
//           message: "All fields must be filled correctly",
//         });
//       }
//       const userId = await User.create(req.body);
//       res.status(201).json({ message: "User registered", userId });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }

//   static async login(req, res) {
//     try {
//       const { email, password } = req.body;
//       const user = await User.findByEmail(email);
//       if (!user) return res.status(401).json({ message: "Invalid credentials" });
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

//       const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
//       res.status(200).json({
//         message: "Login successful, enjoy it!",
//         userDetail: {
//           userId: user.id,
//           name: user.name,
//           email: user.email,
//           token: token,
//         },
//       });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
//   static logout = (req, res) => {
//     // Jika Anda menyimpan token di cookies, Anda bisa menggunakan `clearCookie`
//     res.clearCookie("token"); // Hapus cookie yang menyimpan token

//     // Mengirimkan response bahwa logout berhasil
//     res.status(200).json({ message: "Logout successful" });
//   };

//   async index(req, res) {
//     // Fetch all tour records from the database
//     const user = await User.all();

//     // Check if the result is empty
//     if (!user) {
//       // Return a 404 response if no data is found
//       return res.status(404).json({
//         message: "Data is empty",
//         data: user,
//       });
//     }
//     // Return a 200 response with the fetched data if data exists
//     return res.status(200).json({
//       message: "Get All Resource User",
//       data: user,
//     });
//   }
// }

// module.exports = AuthController;
