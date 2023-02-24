const selectUserAndPostsByQuery = require("../../db/queries/posts/selectUserAndPostsByQuery");

const listUserAndPostsByUsernameParam = async (req, res, next) => {
  try {
    const { keyword } = req.query;

    const { user } = await selectUserAndPostsByQuery(keyword);

    const users = Object.values(
      user.reduce((usersObject, currentUser) => {
        const { id, name, about_me, avatar, post_id, text, image } = currentUser;
        usersObject[id] ||= { id, name, about_me, avatar, posts: [] };
        post_id && usersObject[id].posts.push({ post_id, text, image });
        return usersObject;
      }, {})
    );

    res.send({
      code: 200,
      status: "ok",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = listUserAndPostsByUsernameParam;
