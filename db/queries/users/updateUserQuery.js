const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const updateUserQuery = async (name, kind, breed, aboutMe, idUser) => {
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

    if (kind) {
      await connection.query(`UPDATE users SET kind = ? WHERE id = ?`, [kind, idUser]);
    }

    if (breed) {
      await connection.query(`UPDATE users SET breed = ? WHERE id = ?`, [breed, idUser]);
    }

    if (aboutMe) {
      await connection.query(`UPDATE users SET about_me = ? WHERE id = ?`, [aboutMe, idUser]);
    }
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateUserQuery;
