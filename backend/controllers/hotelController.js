const Hotel = require("../models/Hotel");

// Add a new hotel
exports.addHotel = async (req, res) => {
  try {
    const { name, address } = req.body;
    const logo = req.file ? `/uploads/${req.file.filename}` : null;

    const hotel = new Hotel({ name, address, logo });
    await hotel.save();

    res.status(201).json({ success: true, hotel });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all hotels
exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json({ success: true, hotels });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
