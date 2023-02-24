const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");
const deleteUserQuery = require("../../db/queries/users/deleteUserQuery");

const deleteUser = async (req, res, next) => {
  try {
    const { idUser } = req.params;

    const user = await selectUserByIdQuery(idUser, req.user.id);

    if (!user) {
      generateError("No tienes suficientes permisos", 401);
    }
    await deleteUserQuery(idUser);

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
