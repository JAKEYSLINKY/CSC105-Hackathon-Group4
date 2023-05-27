const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/randommsgs", (req, res) => {
  console.log("randommsgs");
  try {
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
    const sqlSelect =
      "SELECT * FROM message WHERE user_id <> ? AND admin = ? ORDER BY RAND() LIMIT 3";
    const values = [userId, true];

    connection.query(sqlSelect, values, (err, results) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        const randomMessages = results;
        return res.json(randomMessages);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
