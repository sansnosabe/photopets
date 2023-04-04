const selectUserByIdQuery = require("../../db/queries/users/selectUserByIdQuery");

const getOwnUser = async (req, res, next) => {
  try {
    const user = await selectUserByIdQuery(req.user.id);

    res.send({
      code: 200,
      status: "ok",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getOwnUser;
