const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const selectPostsByUserIdQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();
    const [userPosts] = await connection.query(
      `
      SELECT U.name AS user,
        P.id, P.image, P.text,
        COUNT(L.id) AS likes,
        JSON_ARRAYAGG(JSON_OBJECT('id', P.id, 'comment', C.comment, 'user', CU.name)) AS comments
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users CU ON C.id_user = CU.id
      WHERE P.id_user = ?
      GROUP BY P.id
      `,
      [idUser]
    );

    if (userPosts.length === 0) {
      generateError("No existe ningún post con este ID", 404);
    }

    return userPosts;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsByUserIdQuery;
