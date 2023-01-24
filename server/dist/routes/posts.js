"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _posts = require("../controllers/posts.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get('/', _posts.getPosts);
router.post('/', _posts.createPost);
router.get('/:id', _posts.getPost);
router.patch('/:id', _posts.updatePost);
router["delete"]('/:id', _posts.deletePost);
router.patch('/:id/likePost', _posts.likePost);
var _default = router;
exports["default"] = _default;