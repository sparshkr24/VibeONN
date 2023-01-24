"use strict";

var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _cors = _interopRequireDefault(require("cors"));
var _posts = _interopRequireDefault(require("./routes/posts.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_bodyParser["default"].json({
  limit: '30mb',
  extended: true
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '30mb',
  extended: true
}));
app.use((0, _cors["default"])());
app.use('/posts', _posts["default"]);

// const CONNECTION_URL = 'mongodb+srv://js_mastery:123123123@practice.jto9p.mongodb.net/test';

var CONNECTION_URL = 'mongodb+srv://sparshkr24:tonystark42@cluster0.c01oypx.mongodb.net/?retryWrites=true&w=majority';
var PORT = process.env.PORT || 5000;
_mongoose["default"].connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return app.listen(PORT, function () {
    return console.log("Server Running on Port: http://localhost:".concat(PORT));
  });
})["catch"](function (error) {
  return console.log("".concat(error, " did not connect"));
});
_mongoose["default"].set('useFindAndModify', false);