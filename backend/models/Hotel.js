const mongoose = require("mongoose");
const QRCode = require("qrcode");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: { type: String },
  address: { type: String, required: true },
  qrCode: { type: String },
});

// Middleware to generate QR code before saving a hotel
hotelSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("name") || this.isModified("address")) {
    try {
      const qrCodeUrl = `http://localhost:3000/hotel/${this._id}`;
      this.qrCode = await QRCode.toDataURL(qrCodeUrl);
    } catch (err) {
      return next(err);
    }
  }
  next();
});

module.exports = mongoose.model("Hotel", hotelSchema);
