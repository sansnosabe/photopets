const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");

const updateUserQuery = require("../../db/queries/users/updateUserQuery");
const { saveImg, deleteImg } = require("../../helpers");

const editUser = async (req, res, next) => {
  try {
    const user = await selectUserByIdQuery(req.user.id);
    const { name, kind, breed, about_me } = req.body;

    let image = user.avatar;

    if (req.files && req.files.avatar) {
      const { avatar } = req.files;

      if (user.avatar !== "default.jpg") {
        await deleteImg(user.avatar);
      }

      image = await saveImg(avatar, 500);
    }

    await updateUserQuery(name, kind, breed, about_me, image, req.user.id);

    res.send({
      code: 200,
      status: "ok",
      message: "Usuario actualizado",
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = editUser;
