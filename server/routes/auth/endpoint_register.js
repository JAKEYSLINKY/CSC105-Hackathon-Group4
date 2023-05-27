const mysql = require("mysql2");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  const salt1 = await bcrypt.genSalt(10);
  console.log("Salt #1: ", salt1);
  const hash1 = await bcrypt.hash(password, salt1);
  console.log("Hash #1: ", hash1);

  var sql = mysql.format(
	"INSERT INTO users (email, hashed_password, name) VALUES (?, ?, ?)",
	[email, hash1, name]
  );

  console.log("hello");
//   console.log("DEBUG: /basic/register => " + sql);
//   console.log(connection);
  
  connection.query(sql, (err, rows) => {
    console.log("DEBUG: /basic/register => " + sql);
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    res.json({
      success: true,
      message: "User has been created",
    });
  });
};