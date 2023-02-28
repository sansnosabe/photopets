const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");
const selectPostsByUserIdQuery = require("../../db/queries/posts/selectPostsByUserIdQuery");
const deletePostQuery = require("../../db/queries/posts/deletePostQuery");
const deleteUserQuery = require("../../db/queries/users/deleteUserQuery");
const { deleteImg, generateError } = require("../../helpers");

const deleteUser = async (req, res, next) => {
  try {
    const user = await selectUserByIdQuery(req.user.id);
    if (user.avatar) {
      await deleteImg(user.avatar);
    }

    const posts = await selectPostsByUserIdQuery(req.user.id);

    if (posts instanceof Error) {
      throw posts;
    }

    for (const post of posts) {
      await deletePostQuery(post.post_id);
    }

    await deleteUserQuery(req.user.id);

    res.send({
      code: 200,
      status: "ok",
      message: "Usuario eliminado",
    });
  } catch (err) {
    if (err instanceof Error) {
      return next(err);
    }
    const error = generateError("Error al eliminar usuario", 500);
    return next(error);
  }
};

module.exports = deleteUser;
