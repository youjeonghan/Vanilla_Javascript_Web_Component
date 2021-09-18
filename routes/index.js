var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/example1", function (req, res, next) {
  res.render("example1/index", { title: "examlpl1" });
});

router.get("/example2", function (req, res, next) {
  res.render("example2/index", { title: "examlpl2" });
});

module.exports = router;
