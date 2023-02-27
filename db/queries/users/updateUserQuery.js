const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const updateUserQuery = async (name, email, kind, breed, aboutMe, avatar, idUser) => {
  let connection;

  try {
    connection = await getDB();

    if (name) {
      const [users] = await connection.query(`SELECT id FROM users WHERE name = ?`, [name]);

      if (users.length > 0) {
        generateError("Ya existe un usuario con este nombre", 403);
      }

      await connection.query(`UPDATE users SET name = ? WHERE id = ?`, [name, idUser]);
    }

    if (email) {
      const [usersEmail] = await connection.query(`SELECT id FROM users WHERE email = ?`, [email]);

      if (usersEmail.length > 0) {
        generateError("Ya existe un usuario con este email", 403);
      }

      await connection.query(`UPDATE users SET email = ? WHERE id = ?`, [email, idUser]);
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

    if (avatar) {
      await connection.query(`UPDATE users SET avatar = ? WHERE id = ?`, [avatar, idUser]);
    }
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateUserQuery;
