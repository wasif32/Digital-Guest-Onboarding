const Hotel = require("../models/Hotel");

// Add a new hotel
exports.addHotel = async (req, res) => {
  try {
    const { name, address } = req.body;

    // Validate required fields
    if (!name || !address) {
      return res
        .status(400)
        .json({ success: false, message: "Name and address are required." });
    }

    // Check if a hotel with the same name and address already exists
    const existingHotel = await Hotel.findOne({ name, address });
    if (existingHotel) {
      return res.status(400).json({
        success: false,
        message: "A hotel with the same name and address already exists.",
      });
    }

    // Handle file upload
    const logo = req.file ? `/uploads/${req.file.filename}` : null;

    const hotel = new Hotel({ name, address, logo });
    await hotel.save();

    res.status(200).json({ success: true, hotel });
  } catch (error) {
    console.error("Error adding hotel:", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};

// Get all hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({ success: true, hotels });
  } catch (error) {
    console.error("Error fetching hotels:", error.message);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
