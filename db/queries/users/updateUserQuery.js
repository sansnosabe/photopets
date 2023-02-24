const getDB = require("../../getDB");

const updateUserQuery = async (userData, idUser) => {
  let connection;

  try {
    const { name, kind } = userData;
    connection = await getDB();
    await connection.query(`UPDATE users SET name = IFNULL(?, name), kind = IFNULL(?, kind) WHERE id = ?`, [name, kind, idUser]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = updateUserQuery;
