// // Mengganti import dengan require
// const db = require("../../config/database");
// const jwt = require("jsonwebtoken");

// export const refreshToken = async (req, res) => {
//   try {
//     const refreshToken = req.cookies.refreshToken;
//     if (!refreshToken) return res.sendStatus(401);

//     const [rows] = await db.query("SELECT * FROM users WHERE refresh_token = ?", [refreshToken]);
//     const user = rows[0];
//     if (!user) return res.sendStatus(403);

//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//       if (err) return res.sendStatus(403);
//       const { id: userId, name, email } = user;
//       const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: "15s",
//       });
//       res.json({ accessToken });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// Mengganti import dengan require
const db = require("../../config/database");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const [rows] = await db.query("SELECT * FROM user WHERE refresh_token = ?", [refreshToken]);
    const user = rows[0];
    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const { id: userId, name, email } = user;
      const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15s",
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};

// Menggunakan module.exports untuk mengekspor fungsi
module.exports = { refreshToken };
