const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectPostByIdQuery = async (idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();
    const [post] = await connection.query(
      `
      SELECT P.id, P.image, P.text, P.id_user,
      JSON_OBJECT('id', U.id, 'name', U.name) AS user,
      COUNT(L.id) AS likes,
      IF(COUNT(C.id) > 0, JSON_ARRAYAGG(JSON_OBJECT('id', C.id, 'comment', C.comment, 'user', CU.name)), NULL) AS comments
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users CU ON C.id_user = CU.id
      WHERE P.id = ? AND P.id_user = ?
      GROUP BY P.id, U.id, U.name
      `,
      [idPost, idUser]
    );

    if (post.length === 0) {
      generateError("El post no existe o no pertenece al usuario", 404);
    }

    const { comments, ...rest } = post[0];
    const result = { ...rest };
    if (comments) {
      result.comments = comments;
    }

    return result;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostByIdQuery;
