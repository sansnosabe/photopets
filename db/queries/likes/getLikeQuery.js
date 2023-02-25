const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const getLikeQuery = async (idUser, idPost) => {
  let connection;
  try {
    connection = await getDB();
    const [likes] = await connection.query(`SELECT value FROM likes WHERE id_user = ? AND id_post = ?`, [idUser, idPost]);
    if (likes.length === 0) {
      generateError("No le has dado like a este post");
    }
    return likes[0].value;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getLikeQuery;
