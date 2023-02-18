const nodemailer = require("nodemailer");

const { SMTP_USER, SMTP_PASS } = process.env;

const transport = nodemailer.createTransport({
  host: "smtp-instapets.com",
  port: 587,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

const generateError = (msg, code) => {
  const err = new Error(msg);
  err.httpStatus = code;
  throw err;
};

const sendMail = async (to, subject, text) => {
  try {
    await transport.sendMail({
      from: "instapets@instapets.com",
      to,
      subject,
      text,
    });
  } catch (err) {
    console.error(err);
    generateError("Error al enviar el email de verificación");
  }
};

module.exports = {
  generateError,
  sendMail,
};
