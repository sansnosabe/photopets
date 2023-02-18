const getDB = require("../../getDB");

const bcrypt = require("bcrypt");

const { generateError } = require("../../../helpers");

const insertUserQuery = async (name, email, password) => {
  let connection;

  try {
    connection = await getDB();

    let [users] = await connection.query(`SELECT id FROM users WHERE name = ?`, [name]);
    if (users.length > 0) {
      generateError("Nombre de usuario no disponible", 403);
    }

    [users] = await connection.query(`SELECT id FROM users WHERE email = ?`, [email]);
    if (users.length > 0) {
      generateError("Ya existe un usuario con este email", 403);
    }

    // Encriptamos la contraseña del usuario.
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insertamos el usuario en la base de datos.
    await connection.query(`INSERT INTO users (name, email, password) VALUE(?, ?, ?)`, [name, email, hashedPassword]);
  } finally {
    // Si hay conexión la liberamos.
    if (connection) connection.release();
  }
};

module.exports = insertUserQuery;
