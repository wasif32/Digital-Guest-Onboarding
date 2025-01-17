const Guest = require("../models/Guest");

exports.getGuests = async (req, res) => {
  try {
    const guests = await Guest.find({ hotelId: req.params.hotelId });
    res.status(200).json({ success: true, guests });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.editGuest = async (req, res) => {
  try {
    const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!guest) return res.status(404).json({ message: "Guest not found" });

    res.status(200).json({ success: true, guest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.viewGuest = async (req, res) => {
  try {
    const guest = await Guest.findById(req.params.id);
    if (!guest) return res.status(404).json({ message: "Guest not found" });

    res.status(200).json({ success: true, guest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
