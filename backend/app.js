require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

// Use CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only the frontend to make requests
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods if needed
    credentials: true, // If you are sending cookies or credentials
  })
);

// Routes
const hotelRoutes = require("./routes/hotelRoutes");
const guestRoutes = require("./routes/guestRoutes");
const authRoutes = require("./routes/authRoutes");
const guestAdminRoutes = require("./routes/guestAdminRoutes");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/admin", hotelRoutes);
app.use("/api/guest", guestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/guest-admin", guestAdminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
