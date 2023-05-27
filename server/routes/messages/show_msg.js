const express = require("express");
const router = express.Router();

router.get("/showmsg", (req, res) => {
  console.log("showmsg");
  try {
    // Retrieve userId from request body
    const userId = req.query.userId; 
    console.log(userId);
    const sqlSelect = "SELECT * FROM message WHERE user_id = ?";
    connection.query(sqlSelect, [userId], (err, results) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        const userData = results;
        return res.json(userData);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
