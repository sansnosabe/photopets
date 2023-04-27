const insertLikeQuery = require("../../db/queries/likes/insertLikeQuery");
const { generateError } = require("../../helpers");

const likePost = async (req, res, next) => {
	try {
		const { idPost } = req.params;

		const like = req.body;

		if (!like) {
			generateError("Faltan campos", 400);
		}

		const validVotes = [true];

		if (!validVotes.includes(like.vote)) {
			generateError("Voto no válido, solo admite true", 400);
		}

		await insertLikeQuery(like.vote, req.user.id, idPost);

		res.send({
			code: 200,
			status: "ok",
			message: "Like realizado",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = likePost;
