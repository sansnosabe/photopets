const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectPostByIdQuery = async (idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();
    const [post] = await connection.query(
      `
      SELECT P.id, P.image, P.text,
      COUNT(L.id) AS likes, 
      U.name AS user
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      WHERE P.id = ? AND P.id_user = ?
      GROUP BY P.id
      `,
      [idPost, idUser]
    );

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
