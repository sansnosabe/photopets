const insertPostQuery = require("../../db/queries/posts/insertPostQuery");

const { generateError, saveImg } = require("../../helpers");

const newPost = async (req, res, next) => {
  try {
    // Insertamos texto si existe.
    const { text } = req.body;

    if (!req.files?.image || !text) {
      generateError("Faltan campos", 400);
    }
    let image = await saveImg(req.files.image, 500);

    const post = await insertPostQuery(image, text, req.user.id);

    res.send({
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
