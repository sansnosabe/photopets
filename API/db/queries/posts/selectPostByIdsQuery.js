const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");

const selectPostByIdsQuery = async (idUser, idPost) => {
  let connection;

  try {
    connection = await getDB();
    const [rows] = await connection.query(
      `
      SELECT 
        P.id AS post_id, 
        IFNULL(P.id_user = ?, U.username) AS owner,
        P.text, 
        P.image,
        COUNT(DISTINCT L.id) AS likes,
        COUNT(C.id) AS comments_count,
        C.id AS comment_id,
        C.comment,
        UC.username AS user_name
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users UC ON C.id_user = UC.id
      WHERE P.id = ?
      GROUP BY P.id, C.id
      ORDER BY P.id DESC, C.id ASC
      `,
      [idUser, idPost]
    );

    if (rows.length < 1) {
      return generateError("No existe el post especificado, o no pertenece a este usuario", 404);
    }

    const post = {
      post_id: rows[0].post_id,
      owner: rows[0].owner,
      text: rows[0].text,
      image: rows[0].image,
      likes: rows[0].likes,
      comments_count: rows[0].comments_count,
      comments: [],
    };

    for (const row of rows) {
      if (row.comment_id) {
        post.comments.push({
          id: row.comment_id,
          comment: row.comment,
          user: row.user_name,
        });
      }
    }

    return post;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostByIdsQuery;
