const getDB = require("../../getDB");

const selectPostsQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();

    const [posts] = await connection.query(
      `
      SELECT 
      P.id AS post_id,
      U.name AS user,
      P.text, P.image,
      COUNT(L.id) AS likes,
      COUNT(C.id) AS comments_count,
      IFNULL(JSON_ARRAYAGG(JSON_OBJECT('comment', C.comment, 'user', UC.name)), JSON_ARRAY()) AS comments,
      IFNULL(P.id_user = ?, 0) AS owner
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users UC ON C.id_user = UC.id
      GROUP BY P.id
      `,
      [idUser]
    );

    return posts;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsQuery;
