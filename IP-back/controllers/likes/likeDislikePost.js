const insertLikeDislikeQuery = require("../../db/queries/likes/insertLikeDislikeQuery");
const { generateError } = require("../../helpers");

const likeDislikePost = async (req, res, next) => {
	try {
		const { idPost } = req.params;

		const like = req.body;

		if (!like) {
			generateError("Faltan campos", 400);
		}

		const vote = JSON.parse(req.body.vote.toLowerCase());

		const validVotes = [true, false];

		if (!validVotes.includes(vote)) {
			generateError("Voto no válido, solo admite true o false", 400);
		}

		const action = await insertLikeDislikeQuery(req.user.id, idPost, vote);

		let message;
		if (action === "añadido") {
			message = vote ? "Like realizado" : "Dislike realizado";
		} else if (action === "eliminado") {
			message = vote ? "Like eliminado" : "Dislike eliminado";
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
