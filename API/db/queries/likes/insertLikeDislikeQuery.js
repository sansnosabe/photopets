const getDB = require("../../getDB");

const insertLikeDislikeQuery = async (value, idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();

    const [likes] = await connection.query(`SELECT id FROM likes WHERE id_user = ? AND id_post = ?`, [idUser, idPost]);

    if (likes.length > 0) {
      await connection.query("DELETE FROM likes WHERE id_user = ? AND id_post = ?", [idUser, idPost]);
      return "eliminado";
    }

    await connection.query(`INSERT INTO likes (value, id_user, id_post) VALUES (?, ?, ?)`, [value, idUser, idPost]);
    return "añadido";
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertLikeDislikeQuery;
