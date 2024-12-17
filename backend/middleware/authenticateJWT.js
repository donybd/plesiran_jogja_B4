// const jwt = require('jsonwebtoken');

// function authenticateJWT(req, res, next) {
//   const token = req.header('Authorization')?.split(' ')[1];
//   console.log('Extracted Token:', token);

//   if (!token) {
//     return res.status(401).json({ message: 'Access denied, no token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log('Decoded Token:', decoded);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     if (err.name === 'TokenExpiredError') {
//       return res.status(401).json({ message: 'Token expired' });
//     }
//     res.status(401).json({ message: 'Invalid token' });
//   }
// }

// module.exports = authenticateJWT;
