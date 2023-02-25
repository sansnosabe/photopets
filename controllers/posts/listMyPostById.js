const selectPostByIdQuery = require("../../db/queries/posts/selectPostByIdQuery");

const listMyPostById = async (req, res, next) => {
  try {
    const idUser = req.user.id;
    const idPost = Number(req.params.idPost);

    const post = await selectPostByIdQuery(idUser, idPost);

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

module.exports = listMyPostById;
