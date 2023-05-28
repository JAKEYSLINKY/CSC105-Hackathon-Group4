const express = require("express");
const router = express.Router();

router.delete("/removemsg", (req, res) => {
  console.log("removemsg")
  
  const msgId = req.body.msgId;
  console.log(msgId)
  const sqlDelete = "DELETE FROM message WHERE msg_id = ?";
  connection.query(sqlDelete, [msgId], (err, results) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      res.json({
        success: true,
        error: null,
      });
    }
  });
});
module.exports = router;
