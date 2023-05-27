const express = require("express");
const router = express.Router();

router.delete("/removemsg", (req, res) => {
  const msgId = req.body.msgId;
  const sqlDelete = "DELETE FROM message WHERE msg_id = ?";
  Connection.query(sqlDelete, [msgId], (err, results) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      console.log(`Note ${noteId} deleted properly`);
      res.json({
        success: true,
        error: null,
      });
    }
  });
});
module.exports = router;
