const createUserQuery = require("../../db/queries/users/createUserQuery");
const { v4: uuid } = require("uuid");
const { sendMail, generateError } = require("../../helpers");
const { HOST, PORT } = process.env;

const createUser = async (req, res, next) => {
  try {
    const { username, password, email, kind, breed } = req.body;
    if (!username || !kind || !breed || !email || !password) {
      console.log(username);
      generateError(`Faltan campos ${username}`, 400);
    }

    const regCode = uuid();
    await createUserQuery(username, kind, breed, email, password, regCode);

    const subject = "Activa tu usuario en Instapets";

    const emailContent = `
      ¡Woof Woof ${username}!

      Por favor, verifica tu usuario de instapets a través del siguiente enlace:
      http://${HOST}:${PORT}/users/validate/${regCode}
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
