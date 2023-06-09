const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Connection
const connection = mysql.createConnection({
  host: "db.cshack.site",
  port: "3306",
  user: "group04",
  password: "209219225",
  database: "group04",
});

// Check database
connection.connect(() => {
  console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;

// Enable CORS for requests from http://localhost:5173
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// Register endpoints
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// Register/Login endpoints
app.post("/login", require("./routes/auth/endpoint_login"));
app.post("/register", require("./routes/auth/endpoint_register"));
app.get("/check", require("./routes/auth/endpoint_check_login"));

// Profile endpoints
app.get("/showprofile", require("./routes/profile/show_profile"))
app.patch("/updateprofile", require("./routes/profile/endpoint_update_profile"))

// Song endpoints
app.post("/showsong", require("./routes/song/show_song"))

// Message endpoints
app.get("/showmsg", require("./routes/messages/show_msg"))
app.post("/sendmsg", require("./routes/messages/send_msg"))
app.patch("/updatemsg", require("./routes/messages/update_msg"))
app.delete("/removemsg", require("./routes/messages/remove_msg"))
app.get("/randommsgs", require("./routes/messages/randommsg"))

// Listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
