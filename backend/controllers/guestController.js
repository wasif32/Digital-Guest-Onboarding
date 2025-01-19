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
      stayDates, // { from, to }
      email,
      idProofNumber,
    } = req.body;
    console.log(
      fullName,
      mobileNumber,
      address,
      purposeOfVisit,
      stayDates, // { from, to }
      email,
      idProofNumber
    );
    // Check that all required fields are present
    if (
      !fullName ||
      !mobileNumber ||
      !purposeOfVisit ||
      !stayDates ||
      !stayDates.from ||
      !stayDates.to ||
      !address
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Validate date format (if necessary)
    const { from, to } = stayDates;
    if (new Date(from) > new Date(to)) {
      return res
        .status(400)
        .json({ message: "Stay 'from' date cannot be later than 'to' date" });
    }

    // Check for duplicate guest based on same fullName, mobileNumber, address, email, and idProofNumber
    const existingGuest = await Guest.findOne({
      fullName,
      mobileNumber,
      address,
      email,
      idProofNumber,
    });

    if (existingGuest) {
      return res
        .status(400)
        .json({ message: "Guest with same details already exists" });
    }

    // Create a new guest document
    const guest = new Guest({
      hotelId: req.params.hotelId,
      fullName,
      mobileNumber,
      address,
      purposeOfVisit,
      stayDates: { from, to },
      email,
      idProofNumber,
    });

    // Save the guest details to the database
    await guest.save();

    res.status(200).json({ success: true, guest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
