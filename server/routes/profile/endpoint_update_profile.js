const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Update user profile
router.patch("/updateprofile", (req, res) => {
  const token = req.cookies.user;
  const jwtSecret = "ZJGX1QL7ri6BGJWj3t";

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Please login again",
    });
    return;
  }

  let userId;

  try {
    const decoded = jwt.verify(token, jwtSecret);
    userId = decoded.userId;
  } catch (err) {
    console.error("Error decoding JWT:", err);
    return res.status(401).json({
      success: false,
      data: null,
      error: "Unauthorized: Invalid token.",
    });
  }

  const { email, name } = req.body;

  const sqlUpdate = "UPDATE users SET email = ?, name = ? WHERE id = ?";
  connection.query(sqlUpdate, [email, name, userId], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        data: null,
        error: "User not found.",
      });
    }

    return res.json({
      success: true,
      message: "Profile updated successfully.",
    });
  });
});

module.exports = router;
