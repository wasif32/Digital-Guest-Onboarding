const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String },
  purposeOfVisit: {
    type: String,
    enum: ["Business", "Personal", "Tourist"],
    required: true,
  },
  stayDates: {
    from: { type: Date, required: true },
    to: { type: Date, required: true },
  },
  email: { type: String },
  idProofNumber: { type: String },
});

module.exports = mongoose.model("Guest", guestSchema);
