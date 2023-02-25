const getDB = require("../../getDB");

const { generateError } = require("../../../helpers");

const selectPostsByUserIdQuery = async (idUser) => {
  let connection;

  try {
    connection = await getDB();
    const [userPosts] = await connection.query(
      `
      SELECT posts.id, posts.image, posts.text,
      COUNT(likes.id) AS likes, 
      users.name AS user
      FROM posts
      INNER JOIN users ON users.id = posts.id_user
      LEFT JOIN likes ON likes.id_post = posts.id
      WHERE posts.id_user = ?
      GROUP BY posts.id
      `,
      [idUser]
    );

    if (userPosts.length < 1) {
      throw generateError("El Usuario no tiene ningun post", 404);
    }

    return userPosts;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPostsByUserIdQuery;
