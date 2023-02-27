const getDB = require("../../getDB");

const selectAllUsersQuery = async () => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(
      `
    SELECT U.id, U.name, U.kind, U.breed, U.about_me, U.avatar, U.active,
    COUNT(P.id) as posts_count
    FROM users U 
    LEFT JOIN posts P ON U.id = P.id_user
    GROUP BY U.id`
    );

    return users;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectAllUsersQuery;
