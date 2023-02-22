const insertPostQuery = require("../../db/queries/posts/insertPostQuery");

const { generateError, saveImg } = require("../../helpers");

const newPost = async (req, res, next) => {
  try {
    // Insertamos texto si existe.
    const { text } = req.body;

    // Comprobamos si tenemos imagen sino la hay el post no se puede crear.
    if (req.files?.image) {
      generateError('Faltan campos', 400);
    }
    // Guardamos el nombre de la imagen.
    let image;
    
    image = await saveImg(req.files.image, 500);


    // Creamos el post.
    const post = await insertPostQuery(image, text, req.user.id);

    res.send({
      status: "ok",
      message: 'Post creado',
      data: {
        post,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newPost;
