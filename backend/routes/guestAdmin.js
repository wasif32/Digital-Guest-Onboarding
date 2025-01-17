const express = require("express");
const {
  getGuests,
  editGuest,
  viewGuest,
} = require("../controllers/guestAdminController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/:hotelId/guests", verifyToken, checkRole("guestAdmin"), getGuests);
router.put("/guests/:id", verifyToken, checkRole("guestAdmin"), editGuest);
router.get("/guests/:id", verifyToken, checkRole("guestAdmin"), viewGuest);

module.exports = router;
