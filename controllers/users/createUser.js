const createUserQuery = require("../../db/queries/users/createUserQuery");
const { v4: uuid } = require("uuid");
const { sendMail, generateError } = require("../../helpers");
const { HOST, PORT } = process.env;

const createUser = async (req, res, next) => {
  try {
    const { name, kind, breed, email, password } = req.body;
    if (!name || !kind || !breed || !email || !password) {
      generateError("Faltan campos", 400);
    }

    const registrationCode = uuid();
    await createUserQuery(name, kind, breed, email, password, registrationCode);

    const subject = "Activa tu usuario en Instapets";
    const emailContent = `
      ¡Bienvenid@ ${name}!

      Por favor, verifica tu usuario de instapets a través del siguiente enlace:
      http://${HOST}:${PORT}/users/validate/${registrationCode}
    `;

    await sendMail(email, subject, emailContent);

    res.send({
      code: 200,
      status: "ok",
      message: "Usuario creado. Active su cuenta a través del email de activación.",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;