const updateUserQuery = require("../../db/queries/users/updateUserQuery");

const editUser = async (req, res, next) => {
  try {
    let { name, email, kind, breed, aboutMe } = req.body;

    await updateUserQuery(name, email, kind, breed, aboutMe, req.user.id);

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
