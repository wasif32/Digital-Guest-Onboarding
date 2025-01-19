const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["mainAdmin", "guestAdmin"], required: true },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel", // Assuming you have a `Hotel` collection
    required: function () {
      return this.role === "guestAdmin";
    },
  },
});

// Hash the password before saving
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("Admin", adminSchema, "Admin");
