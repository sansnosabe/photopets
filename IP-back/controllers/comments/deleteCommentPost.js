const deleteCommentQuery = require("../../db/queries/comments/deleteCommentQuery");
const selectCommentByIdQuery = require("../../db/queries/comments/selectCommentByIdQuery");
const { generateError } = require("../../helpers");

const deleteCommentPost = async (req, res, next) => {
	try {
		const { idComment } = req.params;

		const comment = await selectCommentByIdQuery(idComment);

		if (!comment) {
			generateError("El comentario no existe", 404);
		}

		if (comment[0].id_user !== req.user.id) {
			generateError("No estás autorizado para borrar este comentario", 401);
		}

		await deleteCommentQuery(idComment);

		res.send({
			code: 200,
			status: "ok",
			message: "Comentario eliminado",
		});
	} catch (err) {
		next(err);
	}
};

module.exports = deleteCommentPost;
