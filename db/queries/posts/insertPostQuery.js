const getDB = require("../../getDB");

const insertPostQuery = async (text, image, id_user) => {
  let connection;

  try {
    connection = await getDB();

    const [post] = await connection.query(
      `INSERT INTO posts (text, image, id_user) VALUES (?, ?, ?)`,
      [text, image, id_user]
    );

    return {
      id: post.insertId,
      text,
      image,
      id_user,
      createdAt: new Date(),
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertPostQuery;
