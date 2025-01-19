const express = require("express");
const multer = require("multer");
const upload = multer();

const {
  submitGuestDetails,
  getHotelLandingPage,
} = require("../controllers/guestController");
const router = express.Router();

router.get("/:hotelId", getHotelLandingPage);
router.post("/:hotelId", upload.none(), submitGuestDetails);

module.exports = router;
