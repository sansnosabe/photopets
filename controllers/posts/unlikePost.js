const deleteLikeQuery = require("../../db/queries/likes/deleteLikeQuery");
const getLikeQuery = require("../../db/queries/likes/getLikeQuery");
const { generateError } = require("../../helpers");

const unlikePost = async (req, res, next) => {
  try {
    const { idPost } = req.params;

    const existingLike = await getLikeQuery(req.user.id, idPost);
    if (!existingLike) {
      generateError("No has dado like a este post", 400);
    }

    await deleteLikeQuery(req.user.id, idPost);

    res.send({
      code: 200,
      status: "ok",
      message: "Like eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = unlikePost;
