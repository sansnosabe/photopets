const updateUserQuery = require("../../db/queries/users/updateUserQuery");
const { saveImg } = require("../../helpers");

const editUser = async (req, res, next) => {
  try {
    const { name, kind, breed, about_me } = req.body;

    const image = await saveImg(req.files.avatar, 500);

    await updateUserQuery(name, kind, breed, about_me, image, req.user.id);

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
