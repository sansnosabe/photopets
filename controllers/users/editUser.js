const updateUserQuery = require("../../db/queries/users/updateUserQuery");
const checkUsernameQuery = require("../../db/queries/users/checkUsernameQuery");
const editUser = async (req, res, next) => {
  try {
    const { name, kind } = req.body;
    const { id } = req.user;
    const { idUser } = req.params;
    if (id !== +idUser) {
      return res.status(401).send({
        code: 401,
        status: "error",
        message: "No tienes permiso para modificar este usuario",
      });
    }

    const usernameExists = await checkUsernameQuery(name, idUser);
    if (usernameExists) {
      return res.status(400).send({
        code: 400,
        status: "error",
        message: "El nombre de usuario ya está registrado",
      });
    }

    console.log(name, kind, idUser);
    await updateUserQuery({ name, kind }, idUser);

    // Enviar una respuesta de éxito
    res.send({
      code: 200,
      status: "ok",
      message: "Usuario actualizado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = editUser;
