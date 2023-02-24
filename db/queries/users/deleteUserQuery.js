const getDB = require("../../getDB");

const deleteUserQuery = async (id_user) => {
  let connection;

  try {
    connection = await getDB();

    await connection.query(`DELETE FROM posts WHERE id_user = ?`, [id_user]);

    await connection.query(`DELETE FROM likes WHERE id_user = ?`, [id_user]);

    await connection.query(`DELETE FROM comments WHERE id_user = ?`, [id_user]);

    await connection.query(`DELETE FROM users WHERE id = ?`, [id_user]);
    
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteUserQuery;
