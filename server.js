const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const expressSession = require("express-session");
const passport = require("./passport/index");
const app = express();

mongoose.connect("mongodb://localhost/onlinejudge");

app.set("view engine", "ejs");
app.use(bodyParser.json()); // to parse the incoming http requests
app.use(express.urlencoded({ extended: true })); // for sending html form data

app.use(
  expressSession({
    // to create express session. Used by passport js
    secret: "easy very easy",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

const home_route = require("./routes/homepage");
const auth_route = require("./routes/auth");

app.use(home_route);
app.use("/auth", auth_route);

const port = 3000;
app.listen(port, () => {
  console.log("Live On " + port);
});
