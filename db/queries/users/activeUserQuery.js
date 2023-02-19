const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const activeUserQuery = async (registrationCode) => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(`SELECT id FROM users WHERE reg_code = ?`, [registrationCode]);

    if (users.length < 1) {
      generateError("Código incorrecto", 404);
    }

    // Activamos el usuario.
    await connection.query(`UPDATE users SET active = true, reg_code = null WHERE reg_code = ?`, [registrationCode]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = activeUserQuery;
