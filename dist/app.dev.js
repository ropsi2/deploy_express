"use strict";

var express = require("express");

var app = express();

var path = require("path");

var router = express.Router();

var bodyParser = require("body-parser"); // add body-parser module


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({
  extended: true
})); // use body-parser

router.get("/", function (req, res) {
  res.render("home");
});
router.get("/login", function (req, res) {
  res.render("login");
});
app.post("/login", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      password = _req$body.password;

  if (name === "admin" && password === "admin") {
    res.render("login_success", {
      username: name
    });
  } else {
    res.render("login_failure");
  }
});
router.get("/about", function (req, res) {
  res.render("about", {
    title: "Hey",
    message: "The file is getting rendered"
  });
});
app.use("/", router);
app.listen(process.env.PORT || 8000, function () {
  console.log("Running at Port 8000");
});
//# sourceMappingURL=app.dev.js.map
