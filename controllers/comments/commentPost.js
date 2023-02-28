const insertCommentQuery = require("../../db/queries/comments/insertCommentQuery");
const { generateError } = require("../../helpers");

const commentPost = async (req, res, next) => {
  try {
    const { idPost } = req.params;
    const comment = req.body;

    if (!comment || !comment.comment) {
      generateError("Faltan campos", 400);
    }

    await insertCommentQuery(+idPost, req.user.id, comment.comment);

    res.send({
      code: 200,
      status: "ok",
      message: "Comentario realizado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = commentPost;
