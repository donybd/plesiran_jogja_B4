// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { google } = require("googleapis");
const router = require("./routes/index");
const routes = require("./routes/upload");

dotenv.config();

// Initialize express app
const app = express();

// Destructuring process.env for port
const { APP_PORT, CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE } = process.env;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Adjust based on your frontend URL
  credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());

// Routes setup
app.use(router); // Your existing routes
// app.use("/", routes); // Additional upload routes

// Google OAuth2 client setup
const oauth2client = new google.auth.OAuth2(CLIENT_ID_GOOGLE, CLIENT_SECRET_GOOGLE, "http://localhost:3000/auth/google/callback");

const scopes = ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"];

// Google authentication routes
app.get("/auth/google", (req, res) => {
  const authorizationUrl = oauth2client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
    include_granted_scopes: true,
  });
  res.json({ authUrl: authorizationUrl });
});

app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2client.getToken(code);
    oauth2client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2client,
      version: "v2",
    });

    const { data } = await oauth2.userinfo.get();

    if (!data) {
      return res.status(500).json({
        error: "Failed to fetch user data",
      });
    }

    res.redirect("http://localhost:5173/homepage");
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({
      error: "Failed to fetch user data",
    });
  }
});

// Database connection check (Replace with your actual DB connection)
try {
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

// Start the server on the configured port
app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`));
