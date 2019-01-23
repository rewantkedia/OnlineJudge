const router = require("express").Router();
var request = require("request");

router.get("/", (req, res) => {
  res.render("problems");
});
router.post("/", (req, res) => {
  console.log("HERE");
  text = req.body.code;
  text = text.replace(/\r?\n/g, "\n");
  //   console.log(req.body.code);
  console.log(text);
  var program = {
    script: text,
    language: "cpp",
    versionIndex: "0",
    clientId: "e1296a045c8fd205c2bc478cde607bf5",
    clientSecret:
      "61863b5c2bf62d8898dbb62630a961ec8c14c8e3c6ba2f91759d2d5a391e7b06"
  };
  request(
    {
      url: "https://api.jdoodle.com/execute",
      method: "POST",
      json: program
    },
    function(error, response, body) {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
    }
  );
});

module.exports = router;
