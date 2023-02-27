const updateUserQuery = require("../../db/queries/users/updateUserQuery");
const { saveImg } = require("../../helpers");

const editUser = async (req, res, next) => {
  try {
    let { name, email, kind, breed, aboutMe } = req.body;

    let avatar = await saveImg(req.files.avatar, 500);

    await updateUserQuery(name, email, kind, breed, aboutMe, avatar, req.user.id);

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
