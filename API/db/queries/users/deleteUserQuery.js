const getDB = require("../../getDB");

const deleteUserQuery = async (idUser) => {
	let connection;

	try {
		connection = await getDB();

		await connection.query(`DELETE FROM posts WHERE id_user = ?`, [idUser]);

		await connection.query(`DELETE FROM likes WHERE id_user = ?`, [idUser]);

		await connection.query(`DELETE FROM comments WHERE id_user = ?`, [idUser]);

		await connection.query(`DELETE FROM users WHERE id = ?`, [idUser]);
	} finally {
		if (connection) connection.release();
	}
};

module.exports = deleteUserQuery;
