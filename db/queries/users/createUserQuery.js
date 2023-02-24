const getDB = require("../../getDB");
const bcrypt = require("bcrypt");
const { generateError } = require("../../../helpers");

const createUserQuery = async (name, kind, breed, email, password, registrationCode) => {
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

    const hashedPassword = await bcrypt.hash(password, 10);


    await connection.query(`INSERT INTO users (name, kind, breed, email,  password, reg_code) VALUE(?, ?, ?, ?, ?, ?)`, [
      name,
      kind,
      breed,
      email,
      hashedPassword,
      registrationCode,
    ]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = createUserQuery;
