var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/example1", function (req, res, next) {
  res.render("Create_web_components/example1/index.html", {
    title: "examlpl1"
  });
});

router.get("/example2", function (req, res, next) {
  res.render("Create_web_components/example2/index.html", {
    title: "examlpl2"
  });
});

router.get("/example3", function (req, res, next) {
  res.render("Create_web_components/example2/index.html", {
    title: "examlpl3"
  });
});

router.get("/example4", function (req, res, next) {
  res.render("Create_web_components/example4/index.html", {
    title: "examlpl4"
  });
});

router.get("/example5", function (req, res, next) {
  res.render("Create_web_components/example5/index.html", {
    title: "examlpl5"
  });
});

router.get("/example6", function (req, res, next) {
  res.render("Create_web_components/example6/index.html", {
    title: "examlpl6"
  });
});

router.get("/example7", function (req, res, next) {
  res.render("Create_web_components/example7/index.html", {
    title: "examlpl7"
  });
});

router.get("/example9", function (req, res, next) {
  res.render("Create_status_management/01-pubsub/index.html", {
    title: "01-pubsub"
  });
});

router.get("/pratice", function (req, res, next) {
  res.render("pratice/index", { title: "pratice" });
});

router.get("/redux_pratice", function (req, res, next) {
  res.render("redux_pratice/index", { title: "pratice" });
});

module.exports = router;
