const getDB = require("../../getDB");

const selectAllUsersQuery = async () => {
  let connection;

  try {
    connection = await getDB();

    const [users] = await connection.query(`SELECT id, name, kind, breed, email, about_me, avatar FROM users`);

    return users;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectAllUsersQuery;