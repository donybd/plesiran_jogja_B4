// function authenticateAdmin(req, res, next) {
//   // makesure data user is available at middleware `authenticateJWT`
//   if (!req.user) {
//     return res.status(401).json({ message: 'Unauthorized, user data missing' });
//   }

//   // check if role user is admin
//   if (req.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Access denied, admin only' });
//   }

//   next();
// }

// module.exports = authenticateAdmin;
