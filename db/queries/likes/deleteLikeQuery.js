const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const deleteLikeQuery = async (idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();

    const [likes] = await connection.query("SELECT id FROM likes WHERE id_user = ? AND id_post = ?", [idUser, idPost]);

    if (likes.length === 0) {
      generateError("No existe el like", 404);
    }

    await connection.query("DELETE FROM likes WHERE id_user = ? AND id_post = ?", [idUser, idPost]);
  } catch (error) {
    throw error;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteLikeQuery;
