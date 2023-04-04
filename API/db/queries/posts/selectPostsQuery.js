const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectPostsQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();

    const [rows] = await connection.query(
      `
      SELECT 
        P.id AS post_id, 
        IFNULL(P.id_user = ?, U.name) AS owner,
        P.text, 
        P.image,
        COUNT(DISTINCT L.id) AS likes,
        COUNT( C.id) AS comments_count,
        C.id AS comment_id,
        C.comment,
        UC.name AS user_name
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users UC ON C.id_user = UC.id
      GROUP BY P.id, C.id
      ORDER BY P.id DESC, C.id ASC
      `,
      [idUser]
    );

    if (rows.length < 1) {
      return generateError("No existe ningun post para este usuario", 404);
    }

    const posts = [];

    let currentPost = null;

    for (const row of rows) {
      if (!currentPost || currentPost.post_id !== row.post_id) {
        currentPost = {
          post_id: row.post_id,
          owner: row.owner,
          text: row.text,
          image: row.image,
          likes: row.likes,
          comments_count: row.comments_count,
          comments: [],
        };

        posts.push(currentPost);
      }

      if (row.comment_id) {
        currentPost.comments.push({
          id: row.comment_id,
          comment: row.comment,
          user: row.user_name,
        });
      }
    }

    return posts;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsQuery;
