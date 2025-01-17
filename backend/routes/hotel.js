const express = require("express");
const {
  addHotel,
  getHotels,
  generateQrCode,
} = require("../controllers/hotelController");
const router = express.Router();

router.post("/hotels", addHotel);
router.get("/hotels", getHotels);
router.get("/hotels/:id/qr", generateQrCode);

module.exports = router;
