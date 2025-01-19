const express = require("express");
const upload = require("../utils/multer");
const { addHotel, getAllHotels } = require("../controllers/hotelController");
const router = express.Router();

router.post("/addhotel", upload.single("logo"), addHotel);
router.get("/gethotel", getAllHotels);

module.exports = router;
