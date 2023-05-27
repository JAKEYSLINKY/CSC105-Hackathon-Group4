const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.get("/showsong", (req, res) => {
  const groupBy = req.body.groupby;
  let groupSql = "";

  if (groupBy === "blue") {
    groupSql = "WHERE category = 'blue'";
  } else {
    groupSql = "WHERE category = 'not blue'";
  }

  connection.query(`SELECT * FROM songs ${groupSql}`, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        data: null,
        error: err.message,
      });
    }

    // Shuffle the songs using Fisher-Yates algorithm
    shuffleArray(results);

    return res.json({
      success: true,
      data: results,
    });
  });
});

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = router;
