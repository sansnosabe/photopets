const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");
const selectPostsByUserIdQuery = require("../../db/queries/posts/selectPostsByUserIdQuery");
const deleteUserQuery = require("../../db/queries/users/deleteUserQuery");
const { deleteImg, generateError } = require("../../helpers");
const deleteUser = async (req, res, next) => {
  try {
    const user = await selectUserByIdQuery(req.user.id);
    const posts = await selectPostsByUserIdQuery(req.user.id);

    if (user.avatar) {
      await deleteImg(user.avatar);
    }

    if (posts instanceof Error) {
      throw posts;
    }

    for (const post of posts) {
      try {
        if (post.image) {
          await deleteImg(post.image);
        }
      } catch (err) {
        generateError("Error al eliminar la imagen del post", 500);
      }
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
