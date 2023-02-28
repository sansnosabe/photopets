const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectUserByIdQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(
      `
      SELECT U.id, U.name, U.kind, U.breed, U.email, U.about_me, U.avatar, U.role, U.active, 
      COUNT(P.id) AS posts_count
      FROM users U
      LEFT JOIN posts P ON U.id = P.id_user
      WHERE U.id = ?
      GROUP BY U.id
      `,
      [idUser]
    );

    if (users.length < 1) {
      generateError("Usuario no encontrado", 404);
    }

    return users[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectUserByIdQuery;
