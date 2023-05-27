const express = require("express");
const router = express.Router();

router.patch("/updatemsg", (req, res) => {
  const msgId = req.query.msgId;
  const text = req.body.text;
  const sqlUpdate = "UPDATE message SET text = ? WHERE msg_id = ?";
  connection.query(sqlUpdate, [text, msgId], (err, results) => {
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      console.log(`message ${msgId} updated properly`);
      res.json({
        success: true,
        data: {
          msg_id: msgId,
        },
        error: null,
      });
    }
  });
});

module.exports = router;
