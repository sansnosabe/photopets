const selectPostByIdsQuery = require("../../db/queries/posts/selectPostByIdsQuery");
const deletePostQuery = require("../../db/queries/posts/deletePostQuery");
const { generateError, deleteImg } = require("../../helpers");

const deletePost = async (req, res, next) => {
	try {
		const { idPost } = req.params;
		const post = await selectPostByIdsQuery(req.user.id, idPost);

		if (!post) {
			generateError("No se encontró el post", 404);
		}

		if (post.image) {
			await deleteImg(post.image);
		}

		await deletePostQuery(idPost);

		res.send({
			code: 200,
			status: "ok",
			message: "Post eliminado",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deletePost;
