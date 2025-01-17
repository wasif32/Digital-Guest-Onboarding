require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

// Routes
const hotelRoutes = require("./routes/hotel");
const guestRoutes = require("./routes/guest");
const authRoutes = require("./routes/auth");
const guestAdminRoutes = require("./routes/guestAdmin");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/hotel", hotelRoutes);
app.use("/api/guest", guestRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/guest-admin", guestAdminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
