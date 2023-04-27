const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const updateUserQuery = async (username, kind, breed, aboutMe, image, idUser) => {
	let connection;

	try {
		connection = await getDB();

		if (username) {
			const [users] = await connection.query(`SELECT id FROM users WHERE username = ?`, [username]);

			if (users.length > 0) {
				generateError("Ya existe un usuario con este nombre", 403);
			}

			await connection.query(`UPDATE users SET username = ? WHERE id = ?`, [username, idUser]);
		}

		if (kind) {
			await connection.query(`UPDATE users SET kind = ? WHERE id = ?`, [kind, idUser]);
		}

		if (breed) {
			await connection.query(`UPDATE users SET breed = ? WHERE id = ?`, [breed, idUser]);
		}

		if (aboutMe) {
			await connection.query(`UPDATE users SET about_me = ? WHERE id = ?`, [aboutMe, idUser]);
		}

		if (image) {
			await connection.query(`UPDATE users SET avatar = ? WHERE id = ?`, [image, idUser]);
		}
	} finally {
		if (connection) connection.release();
	}
};

module.exports = updateUserQuery;
