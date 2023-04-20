const insertLikeDislikeQuery = require("../../db/queries/likes/insertLikeDislikeQuery");
const { generateError } = require("../../helpers");

const likeDislikePost = async (req, res, next) => {
  try {
    const { idPost } = req.params;

    const like = req.body;

    if (!like) {
      generateError("Faltan campos", 400);
    }

    const vote = !!req.body.vote;

    const validVotes = [true, false];

    if (!validVotes.includes(vote)) {
      generateError("Voto no válido, solo admite true o false", 400);
    }

    const result = await insertLikeDislikeQuery(req.user.id, idPost);

    let message;
    if (result === "añadido") {
      message = "Like realizado";
    } else if (result === "eliminado") {
      message = "Like eliminado";
    }

    res.send({
      code: 200,
      status: "ok",
      message,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = likeDislikePost;

