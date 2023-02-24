const selectPostByIdQuery = require("../../db/queries/posts/selectPostByIdQuery");
const { generateError } = require("../../helpers");

const listUserPostById = async (req, res, next) => {
  try {
    const idUser = req.params.idUser;
    const idPost = req.params.idPost;
    console.log(idUser, idPost);

    const post = await selectPostByIdQuery(idUser, idPost);

    if (!post) {
      generateError("No existe ningun post con ese ID en este usuario", 404);
    }

    res.send({
      code: 200,
      status: "ok",
      data: {
        post,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = listUserPostById;
