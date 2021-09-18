var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var ejs = require("ejs");

var indexRouter = require("./routes/index");

var app = express();
app.set("views", "./public");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);
app.use(logger("dev"));
app.use(express.json()); // 사용자의 json 요청을 받기 위해 사용
app.use(express.urlencoded({ extended: false })); // extended: false -> url에서 기본으로 내장된 queryString을 쓴다는 뜻
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); // express.static 정적 파일의 경로 설정
app.use("/", indexRouter);

module.exports = app;
