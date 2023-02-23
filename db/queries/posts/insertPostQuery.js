const getDB = require("../../getDB");

const insertPostQuery = async ( image, text, id_user) => {
  let connection;

  try {
    connection = await getDB();

    const [post] = await connection.query(
      `INSERT INTO posts (image, text, id_user) VALUES (?, ?, ?)`,
      [image, text, id_user]
    );

    return {
      id: post.insertId,
      image,
      text,
      id_user,
      createdAt: new Date(),
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertPostQuery;
