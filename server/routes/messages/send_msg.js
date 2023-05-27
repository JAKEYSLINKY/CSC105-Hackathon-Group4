const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/sendmsg", (req, res) => {
  const token = req.cookies.user;
  const jwtSecret = "ZJGX1QL7ri6BGJWj3t";

  if (!token) {
    res.json({
      success: false,
      message: "Please login again",
    });
    return;
  }
  let userId;
  try {
    const decoded = jwt.verify(token, jwtSecret);
    userId = decoded.userId;
    console.log(userId);
  } catch (err) {
    console.error("Error decoding JWT:", err);
    return res.status(401).json({
      success: false,
      data: null,
      error: "Unauthorized: Invalid token.",
    });
  }

  const text = req.body.text;

  const sqlInsert = "INSERT INTO message (text, user_id) VALUES (?, ?)";
  const values = [text, userId];

  connection.query(sqlInsert, values, (err, results) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      console.log("Note added");
      res.json({
        success: true,
        data: {
          msg_id: results.insertId,
          text: text,
          user_id: userId,
        },
        error: null,
      });
    }
  });
});

module.exports = router;
