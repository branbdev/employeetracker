var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "brandonbowen",
  password: "thequiethouse",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
