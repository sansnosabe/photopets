const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const deletePostQuery = async (idPost) => {
	let connection;

	try {
		connection = await getDB();

		await connection.query(`DELETE FROM likes WHERE id_post = ?`, [idPost]);
		await connection.query(`DELETE FROM comments WHERE id_post = ?`, [idPost]);
		await connection.query(`DELETE FROM posts WHERE id = ?`, [idPost]);

		if (!idPost) {
			generateError("El post no pertenece al usuario", 404);
		}
	} finally {
		if (connection) connection.release();
	}
};

module.exports = deletePostQuery;
