const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const insertLikeQuery = async (value, idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();

    const [likes] = await connection.query(`SELECT id FROM likes WHERE id_user = ? AND id_post = ?`, [idUser, idPost]);

    if (likes.length > 0) {
      generateError("Ya le has dado like", 403);
    }

    await connection.query(`INSERT INTO likes (value, id_user, id_post) VALUES (?, ?, ?)`, [value, idUser, idPost]);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertLikeQuery;
