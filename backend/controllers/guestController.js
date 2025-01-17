const Guest = require("../models/Guest");
const Hotel = require("../models/Hotel");

exports.getHotelLandingPage = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelId);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });

    res.status(200).json({ success: true, hotel });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.submitGuestDetails = async (req, res) => {
  try {
    const {
      fullName,
      mobileNumber,
      address,
      purposeOfVisit,
      stayDates,
      email,
      idProofNumber,
    } = req.body;

    const guest = new Guest({
      hotelId: req.params.hotelId,
      fullName,
      mobileNumber,
      address,
      purposeOfVisit,
      stayDates,
      email,
      idProofNumber,
    });
    await guest.save();
    res.status(201).json({ success: true, guest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
