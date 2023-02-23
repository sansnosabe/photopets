const getDB = require("../../getDB");

const selectPostsQuery = async (id_user, keyword = "") => {
  let connection;

  try {
    connection = await getDB();

    const [posts] = await connection.query(
      `
      SELECT 
        P.*,
        COUNT(L.id) AS likes,
        BIT_OR(L.id_user = ?) AS myLikes,
        U.name AS user,
        IFNULL(P.id_user = ?, 0) AS owner
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      WHERE P.text LIKE ?
      GROUP BY P.id
      ORDER BY P.created_at DESC
      `,
      [id_user, id_user, `%${keyword}%`]
    );

    return posts;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsQuery;
