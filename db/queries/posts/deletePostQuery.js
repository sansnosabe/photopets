const getDB = require("../../getDB");

const deletePostQuery = async (postId) => {
  let connection;

  try {
    connection = await getDB();
    await connection.query(`DELETE FROM posts WHERE id = ?`, [postId]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deletePostQuery;
