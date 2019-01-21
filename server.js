const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const expressSession = require("express-session");

const app = express();

mongoose.connect("mongodb://localhost/onlinejudge");

app.set("view engine", "ejs");
app.use(bodyParser.json()); // to parse the incoming http requests
app.use(express.urlencoded({ extended: true })); // for sending html form data

const home_route = require("./routes/homepage");

app.use(home_route);

const port = 3000;
app.listen(port, () => {
  console.log("Live On " + port);
});
