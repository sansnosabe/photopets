const deleteCommentQuery = require("../../db/queries/comments/deleteCommentQuery");
const selectCommentByIdQuery = require("../../db/queries/comments/selectCommentByIdQuery");
const { generateError } = require("../../helpers");

const deleteCommentPost = async (req, res, next) => {
  try {
    const { idComment } = req.params;

    // Comprueba si el comentario existe
    const comment = await selectCommentByIdQuery(idComment);

    if (!comment) {
      throw generateError("El comentario no existe", 404);
    }

    // Comprueba si el usuario autenticado es el autor del comentario
    if (comment.id_user !== req.user.id) {
      throw generateError("No estás autorizado para borrar este comentario", 401);
    }

    // Borra el comentario
    await deleteCommentQuery(idComment);

    res.send({
      code: 200,
      status: "ok",
      message: "Comentario eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteCommentPost;
