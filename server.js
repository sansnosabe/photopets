require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(fileUpload());

/**
 * ##############################
 * ## Controladores de Usuario ##
 * ##############################
 */

const { createUser, validateUser, loginUser, getOwnUser, editUser, deleteUser } = require("./controllers/users");
const { newPost } = require("./controllers/posts");
const isAuth = require("./middlewares/isAuth");

app.post("/users", createUser);
app.put("/users/validate/:registrationCode", validateUser);
app.post("/users/login", loginUser);
app.get("/users", isAuth, getOwnUser);
app.put("/users/profile", isAuth, editUser);
app.delete("/users", isAuth, deleteUser);

/**
 * ############################
 * ## Controladores de Posts ##
 * ############################
 */

app.post("/posts", isAuth, newPost);

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

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

