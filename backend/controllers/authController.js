const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username exists in the database
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare the password hash
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token with the user ID and role
    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send the token back in the response
    res.status(200).json({
      success: true,
      data: {
        token,
        user: {
          username: admin.username,
          role: admin.role,
          hotelId: admin.hotelId,
        },
      },
    });
  } catch (error) {
    // Handle errors and send appropriate response
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
