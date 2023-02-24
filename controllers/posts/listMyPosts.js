const selectPostsByUserIdQuery = require("../../db/queries/posts/selectPostsByUserIdQuery");

const listMyPosts = async (req, res, next) => {
  try {
    const idUser = req.user.id;
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

module.exports = listMyPosts;
