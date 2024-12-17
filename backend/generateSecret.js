// const crypto = require("crypto");

// // Membuat secret key acak sepanjang 64 byte
// const secretKey = crypto.randomBytes(64).toString("hex");
// console.log("Generated secret key:", secretKey);

const crypto = require("crypto");

// Membuat string acak untuk ACCESS_TOKEN_SECRET
const accessTokenSecret = crypto.randomBytes(64).toString("hex");

// Membuat string acak untuk REFRESH_TOKEN_SECRET
const refreshTokenSecret = crypto.randomBytes(64).toString("hex");

console.log("ACCESS_TOKEN_SECRET:", accessTokenSecret);
console.log("REFRESH_TOKEN_SECRET:", refreshTokenSecret);
