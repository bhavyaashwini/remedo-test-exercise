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

//Get all Data
app.get("/list", (req, res) => {
  connection.query("SELECT b.user_id, a.address, b.total_invoice_amount, b.invoice_amount_paid, b.remedo_commission FROM users a LEFT JOIN transactions b ON a.user_id AND b.user_id WHERE b.user_id= 1", function(err, results) {
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
