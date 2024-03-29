const getDB = require("../../getDB");
const selectUserByIdQuery = require("../users/selectUserByIdQuery");
const insertCommentQuery = async (idPost, idUser, comment) => {
	let connection;

	try {
		connection = await getDB();

		await selectUserByIdQuery(idUser);

		await connection.query("INSERT INTO comments (id_post, id_user, comment) VALUES (?, ?, ?)", [idPost, idUser, comment]);
	} finally {
		if (connection) connection.release();
	}
};

module.exports = insertCommentQuery;
