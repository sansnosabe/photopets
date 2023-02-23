const selectPostsQuery = require('../../db/queries/posts/selectPostsQuery');

const listPosts = async (req, res, next) => {
    try {
        const { keyword } = req.query;

        const posts = await selectPostsQuery(req.user?.id, keyword);

        res.send({
            status: 'ok',
            data: {
                posts,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listPosts;
