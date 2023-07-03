const selectPostsQuery = require("../../db/queries/posts/selectPostsQuery");

const listPosts = async (req, res, next) => {
	try {
		const posts = await selectPostsQuery(req.user?.id);

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

module.exports = listPosts;
