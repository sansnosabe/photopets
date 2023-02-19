const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const updateUserQuery = async (name, kind, breed, about_me, email, idUser) => {
  let connection;

  try {
    connection = await getDB();

    if (name) {const [users] = await connection.query(`SELECT id FROM users WHERE name = ?`,[name]);

      if (users.length > 0) {generateError("Nombre de usuario no disponible", 403);}

      await connection.query(`UPDATE users SET name = ? WHERE id = ?`, [ name, idUser,]);
    }
    
    if (kind) {
      await connection.query(`UPDATE users SET kind = ? WHERE id = ?`, [kind, idUser,]);
    }

    if (breed) {
      await connection.query(`UPDATE users SET breed = ? WHERE id = ?`, [breed, idUser,]);
    }

    if (about_me) {
      await connection.query(`UPDATE users SET about_me = ? WHERE id = ?`, [about_me, idUser,]);
    }

    if (email) {
      const [users] = await connection.query(`SELECT id FROM users WHERE email = ?`,[email]);

      if (users.length > 0) {generateError("Ya existe un usuario con ese email", 403);}

      await connection.query(`UPDATE users SET email = ? WHERE id = ?`, [email, idUser,]);
    }

  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateUserQuery;
