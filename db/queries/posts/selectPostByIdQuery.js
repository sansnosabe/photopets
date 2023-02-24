const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectPostByIdQuery = async (idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();
    const [post] = await connection.query("SELECT id, text, image FROM posts WHERE id = ? AND id_user = ?", [idPost, idUser]);

    if (post.length === 0) {
      return generateError("El post no existe o no pertenece al usuario", 404);
    }

    return post;
  } catch (error) {
    throw new Error(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostByIdQuery;
