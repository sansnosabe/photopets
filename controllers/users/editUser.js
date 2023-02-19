const updateUserQuery = require("../../db/queries/users/updateUserQuery");

const editUser = async (req, res, next) => {
  try {
    let { name, email, kind, breed, about_me } = req.body;

    await updateUserQuery(name, email, kind, breed, about_me, req.user.id);

    res.send({
      status: "ok",
      message: "Usuario actualizado",
    });

  } catch (err) {
    next(err);
  }
};

module.exports = editUser;
