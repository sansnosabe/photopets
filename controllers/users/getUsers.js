const selectAllUsersQuery = require("../../db/queries/users/selectAllUsersQuery");

const getUsers = async (req, res, next) => {
  try {
    const users = await selectAllUsersQuery();

    res.send({
      code: 200,
      status: "ok",
      data: {
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getUsers;
