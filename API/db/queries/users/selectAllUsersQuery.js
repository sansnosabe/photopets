const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectAllUsersQuery = async () => {
	let connection;

	try {
		connection = await getDB();

		const [users] = await connection.query(
			`
    SELECT U.id, U.username, U.kind, U.breed, U.about_me, U.avatar,
    COUNT(P.id) as posts_count
    FROM users U 
    LEFT JOIN posts P ON U.id = P.id_user
    GROUP BY U.id`
		);

		if (users.length < 1) {
			generateError("No se ha encontrado ningún usuario", 404);
		}

		return users;
	} finally {
		if (connection) connection.release();
	}
};

module.exports = selectAllUsersQuery;
