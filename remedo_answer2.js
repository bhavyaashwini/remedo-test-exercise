const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//DB Connection
const connection = mysql.createConnection({
  host: "mysql.remedoapp.com",
  user: "remedo",
  password: "mypass",
  database: "remedo-database"
});

var corsOptions = {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/sort", (req, res) => {
  connection.query("SELECT user_id, address FROM users ORDER BY user_id", function(err, results) {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  });
});

// set port, listen for requests
app.listen(5050, () => {
  console.log("Started");
});
