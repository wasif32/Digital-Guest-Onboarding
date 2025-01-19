const express = require("express");
const {
  getGuests,
  editGuest,
  viewGuest,
} = require("../controllers/guestAdminController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");
const router = express.Router();

// router.get("/:hotelId", verifyToken, checkRole("guestAdmin"), getGuests);
// router.put("/guests/:id", verifyToken, checkRole("guestAdmin"), editGuest);
// router.get("/guests/:id", verifyToken, checkRole("guestAdmin"), viewGuest);

router.get("/:hotelId", getGuests);
router.put("/guests/:id", editGuest);
router.get("/guests/:id", viewGuest);

module.exports = router;
