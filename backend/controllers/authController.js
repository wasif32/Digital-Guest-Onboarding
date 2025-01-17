const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
