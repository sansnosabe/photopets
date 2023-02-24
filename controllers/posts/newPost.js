const insertPostQuery = require("../../db/queries/posts/insertPostQuery");

const { generateError, saveImg } = require("../../helpers");

const newPost = async (req, res, next) => {
  try {
    const { text } = req.body;

    if (!req.files?.image || !text) {
      generateError("Faltan campos", 400);
    }
    let image = await saveImg(req.files.image, 500);

    const post = await insertPostQuery(text, image, req.user.id);


    res.send({
      code: 200,
      status: "ok",
      message: "Post creado",
      data: {
        post,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newPost;
