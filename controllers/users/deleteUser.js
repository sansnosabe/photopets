const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");
const deleteUserQuery = require("../../db/queries/users/deleteUserQuery");

const { deleteImg } = require("../../helpers");

const deleteUser = async (req, res, next) => {
  try {
    const user = await selectUserByIdQuery(req.user.id);

    if (user.avatar) {
      await deleteImg(user.avatar);
      //await deleteImg(posts.image); ESPERAR A deletePostQuery
    }

    await deleteUserQuery(req.user.id);

    res.send({
      code: 200,
      status: "ok",
      message: "Usuario eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteUser;
