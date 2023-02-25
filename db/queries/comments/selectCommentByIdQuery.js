const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectCommentByIdQuery = async (idComment) => {
  let connection;

  try {
    connection = await getDB();
    const [comment] = await connection.query(
      `
      SELECT id, id_post, id_user, comment
      FROM comments
      WHERE id = ?
      `,
      [idComment]
    );

    if (comment.length === 0) {
      generateError("No se encontró el comentario", 404);
    }

    return comment;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectCommentByIdQuery;
