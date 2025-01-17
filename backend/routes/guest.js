const express = require("express");
const {
  submitGuestDetails,
  getHotelLandingPage,
} = require("../controllers/guestController");
const router = express.Router();

router.get("/:hotelId", getHotelLandingPage);
router.post("/:hotelId", submitGuestDetails);

module.exports = router;
