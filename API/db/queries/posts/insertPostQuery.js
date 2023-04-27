const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const insertPostQuery = async (text, image, id_user) => {
	let connection;

	try {
		connection = await getDB();
		const [user] = await connection.query(`SELECT * FROM users WHERE id = ?`, [id_user]);
		if (user.length === 0) {
			generateError(`El usuario no existe`);
		}

		const [post] = await connection.query(`INSERT INTO posts (text, image, id_user) VALUES (?, ?, ?)`, [text, image, id_user]);

		return {
			id: post.insertId,
			image,
			text,
			id_user,
			createdAt: new Date(),
		};
	} finally {
		if (connection) connection.release();
	}
};

module.exports = insertPostQuery;
