const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["mainAdmin", "guestAdmin"], required: true },
});

// Hash the password before saving
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("Admin", adminSchema);

// 3. API Endpoints
// a. Main Admin Routes:

// Add a Hotel: POST /api/admin/hotels
// View All Hotels: GET /api/admin/hotels
// Generate QR Code: GET /api/admin/hotels/:id/qr
// b. Guest Routes:

// Guest Landing Page: GET /api/guest/:hotelId
// Submit Guest Details: POST /api/guest/:hotelId
// c. Guest Admin Routes:

// View Guests: GET /api/guest-admin/:hotelId/guests
// Edit Guest: PUT /api/guest-admin/guests/:id
// View Guest Details: GET /api/guest-admin/guests/:id

// 4. Authentication and Middleware
// Login Endpoint:
// POST /api/auth/login: Authenticate Main Admin or Guest Admin and issue a JWT token.
// Protect Routes:
// Middleware to verify the JWT and allow access based on the user's role.
