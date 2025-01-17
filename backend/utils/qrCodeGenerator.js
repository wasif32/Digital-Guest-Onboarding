const QRCode = require("qrcode");

// Generate QR code
exports.generateQrCode = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel)
      return res
        .status(404)
        .json({ success: false, message: "Hotel not found" });

    const qrCodeUrl = `https://yourdomain.com/guest/${hotel._id}`;
    const qrCode = await QRCode.toDataURL(qrCodeUrl);

    hotel.qrCode = qrCode;
    await hotel.save();

    res.status(200).json({ success: true, qrCode });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
