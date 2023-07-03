const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const deleteCommentQuery = async (idComment) => {
	let connection;
	try {
		connection = await getDB();
		const [result] = await connection.query("DELETE FROM comments WHERE id = ?", [idComment]);

		if (result.affectedRows === 0) {
			generateError(`No existe el comentario con ID ${idComment}`, 404);
		}
	} finally {
		if (connection) connection.release();
	}
};

module.exports = deleteCommentQuery;
