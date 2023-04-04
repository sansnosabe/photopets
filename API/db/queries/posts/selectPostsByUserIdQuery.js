const getDB = require("../../getDB");

const selectPostsByUserIdQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();

    const [rows] = await connection.query(
      `
      SELECT P.id AS post_id, U.name AS owner, P.text, P.image,
        COUNT(L.id) AS likes,
        C.id AS comment_id,
        C.comment,
        CU.name AS user_name
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users CU ON C.id_user = CU.id
      WHERE P.id_user = ?
      GROUP BY P.id, C.id
      `,
      [idUser]
    );

    const postsMap = new Map();

    for (const row of rows) {
      const { post_id, owner, text, image, likes } = row;

      let post = postsMap.get(post_id);

      if (!post) {
        post = {
          post_id,
          owner,
          text,
          image,
          likes,
          comments_count: 0,
          comments: [],
        };

        postsMap.set(post_id, post);
      }

      if (row.comment_id) {
        post.comments.push({
          id: row.comment_id,
          comment: row.comment,
          user: row.user_name,
        });
        post.comments_count++;
      }
    }

    const posts = Array.from(postsMap.values());

    return posts;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsByUserIdQuery;
