const selectPostByIdQuery = require("../../db/queries/posts/selectPostByIdQuery");
const deletePostQuery = require("../../db/queries/posts/deletePostQuery");
const { generateError } = require("../../helpers");

const deletePost = async (req, res, next) => {
  try {
    const { idPost } = req.params;

    const post = await selectPostByIdQuery(req.user.id, idPost);

    if (!post) {
      generateError("No se encontró el post", 404);
    }

    await deletePostQuery(idPost);

    res.send({
      code: 200,
      status: "ok",
      message: "Post eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deletePost;
