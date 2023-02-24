const getDB = require("../../getDB");

const checkUsernameQuery = async (name) => {
  let connection;

  try {
    connection = await getDB();
    const [rows] = await connection.query(`SELECT COUNT(*) AS count FROM users WHERE name = ?`, [name]);

    return rows[0].count > 0;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = checkUsernameQuery;
