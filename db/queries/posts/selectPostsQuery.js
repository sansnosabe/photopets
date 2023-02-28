const getDB = require("../../getDB");
const { generateError } = require("../../../helpers");
const selectPostsQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();

    const [posts] = await connection.query(
      `
      SELECT 
        P.id AS post_id, 
        IFNULL(P.id_user = ?, U.name) AS owner,
        P.text, P.image,
        COUNT(L.id) AS likes,
        COUNT(C.id) AS comments_count,
        IFNULL(JSON_ARRAYAGG(CONCAT('{ "id": "', P.id, '", "comment": "', C.comment, '", "user": "', UC.name, '" }')), JSON_ARRAY()) AS comments
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users UC ON C.id_user = UC.id
      GROUP BY P.id
      `,
      [idUser]
    );

    if (posts.length < 1) {
      return generateError("No existe ningun post para este usuario", 404);
    }

    return posts.map((post) => {
      const { comments, ...rest } = post;
      return {
        ...rest,
        comments: comments.length
          ? comments.map((comment) => ({
              ...JSON.parse(comment),
            }))
          : [],
      };
    });
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsQuery;
