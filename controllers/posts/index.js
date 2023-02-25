const newPost = require("./newPost");
const listPosts = require("./listPosts");
const listMyPosts = require("./listMyPosts");
const listMyPostById = require("./listMyPostById");
const listUserPosts = require("./listUserPosts");
const listUserPostById = require("./listUserPostById");
const listUserAndPostsByUsernameParam = require("./listUserAndPostsByUsernameParam");
const deletePost = require("./deletePost");
const likePost = require("./likePost");
const unlikePost = require("./unlikePost");

module.exports = {
  newPost,
  listPosts,
  listMyPosts,
  listMyPostById,
  listUserPosts,
  listUserPostById,
  listUserAndPostsByUsernameParam,
  deletePost,
  likePost,
  unlikePost,
};
