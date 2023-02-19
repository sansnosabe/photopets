require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const isAuth = require("./middlewares/isAuth");

/**
 * ##############################
 * ## Controladores de Usuario ##
 * ##############################
*/

const { createUser, validateUser, loginUser, getOwnUser, } = require("./controllers/users");

app.post("/users", createUser);
app.put("/users/validate/:registrationCode", validateUser);
app.post('/users/login', loginUser);
app.get('users', isAuth, getOwnUser);

// Middleware de error.
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.httpStatus || 500).send({
    status: "error",
    message: err.message,
  });
});
// Middleware de ruta no encontrada.
app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: "Ruta no encontrada",
  });
});

const MYSQL_PORT = process.env.MYSQL_PORT;

app.listen(MYSQL_PORT, () => {
  console.log(`Server listening at http://localhost:${MYSQL_PORT}`);
});
