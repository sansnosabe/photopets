const selectPostsByUserIdQuery = require("../../db/queries/posts/selectPostsByUserIdQuery");
const { generateError } = require("../../helpers");

const listMyPosts = async (req, res, next) => {
	try {
		const idUser = req.user.id;

		const posts = await selectPostsByUserIdQuery(idUser);

		if (posts.length === 0) {
			generateError("No existe ningun post con este ID");
		}

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
