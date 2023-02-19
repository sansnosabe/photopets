const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const selectUserByEmailQuery = async (email) => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(
      `SELECT id, role, password, active FROM users WHERE email = ?`,
      [email]
    );

    if (users.length < 1) {
      generateError("Email incorrecto", 404);
    }

    return users[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectUserByEmailQuery;
