const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectUserAndPostsByQuery = async (username = "") => {
	let connection;

	try {
		connection = await getDB();

		const [user] = await connection.query(
			`
      SELECT U.id, U.username, U.about_me, U.avatar, P.id AS post_id, P.text, P.image
      FROM users U
      LEFT JOIN posts P ON U.id = P.id_user
      WHERE U.username LIKE ?
      ORDER BY U.id, P.id
      `,
			[`%${username}%`]
		);

		if (user.length === 0) {
			generateError("No existe ningún usuario con ese nombre", 404);
		}

		return { user };
	} finally {
		if (connection) connection.release();
	}
};

module.exports = selectUserAndPostsByQuery;
