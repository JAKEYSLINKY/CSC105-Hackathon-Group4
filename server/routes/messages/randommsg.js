const express = require("express");
const router = express.Router();

router.get("/randommsgs", (req, res) => {
  console.log("randommsgs");
  try {
    const sqlSelect = "SELECT * FROM message WHERE user_id <> ? AND admin = ? ORDER BY RAND() LIMIT 3";
    const values = [req.query.userId, true];

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
