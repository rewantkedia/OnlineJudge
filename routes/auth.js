const router = require("express").Router();
const User = require("../models/user-model");
const passport = require("../passport/index");

router.get("/signin", (req, res) => {
  res.render("signin", { message: req.query.message });
});

router.post("/signin", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      var url = "/auth/signin?message=" + info.message;
      console.log(url);
      return res.redirect(url);
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log("EXE");
      console.log(req.user);
      return req, res.redirect("/problems");
    });
  })(req, res);
});

router.get("/signup", (req, res) => {
  res.render("signup", { message: req.query.message });
});

router.post("/signup", (req, res) => {
  username = req.body.username;
  password = req.body.password;
  User.findOne({ username: username }).then(user => {
    if (!user) {
      User.create({ username: username, password: password }).then(user => {
        console.log("User Created");
        res.redirect("/auth/signin?message=UserCreated");
      });
    } else {
      console.log("User Exists");
      res.redirect("/auth/signup?message=UserIdExists");
    }
  });
});

module.exports = router;
