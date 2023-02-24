const selectPostsByUserIdQuery = require("../../db/queries/posts/selectPostsByUserIdQuery");

const listUserPosts = async (req, res, next) => {
  try {
    const idUser = req.params.idUser;
    const posts = await selectPostsByUserIdQuery(idUser);

    res.send({
      code: 200,
      status: "ok",
      data: {
        posts,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = listUserPosts;
