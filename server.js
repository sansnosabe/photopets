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

const isAuth = require("./middlewares/isAuth");
const isAuthOptional = require("./middlewares/isAuthOptional");

/**
 * ##############################
 * ## Controladores de Usuario ##
 * ##############################
 */

const { createUser, validateUser, loginUser, getOwnUser, getUsers, editUser, deleteUser } = require("./controllers/users");

app.post("/users", createUser);
app.put("/users/validate/:registrationCode", validateUser);
app.post("/users/login", loginUser);
app.get("/users", isAuthOptional, getUsers);
app.get("/user", isAuth, getOwnUser);
app.put("/user/profile", isAuth, editUser);
app.delete("/user", isAuth, deleteUser);

/**
 * ############################
 * ## Controladores de Posts ##
 * ############################
 */

const { newPost, listPosts, listMyPosts, listMyPostById, listUserPosts, listUserPostById, listUserAndPostsByUsernameParam, deletePost } = require("./controllers/posts");

app.post("/posts", isAuth, newPost);
app.get("/posts", isAuthOptional, listPosts);
app.get("/posts/myPosts", isAuth, listMyPosts);
app.get("/posts/myPosts/:idPost", isAuth, listMyPostById);
app.get("/posts/:idUser", isAuthOptional, listUserPosts);
app.get("/posts/:idUser/:idPost", isAuthOptional, listUserPostById);
app.get("/postsUsername", isAuthOptional, listUserAndPostsByUsernameParam);
app.delete("/posts/:idPost", isAuth, deletePost);

/**
 * ############################
 * ## Controladores de Likes ##
 * ############################
 */

const { likePost, unlikePost } = require("./controllers/likes");

app.post("/posts/:idPost/likes", isAuth, likePost);
app.delete("/posts/:idPost/unlikes", isAuth, unlikePost);

/**
 * ###############################
 * ## Controladores de comments ##
 * ###############################
 */

const { commentPost, deleteCommentPost } = require("./controllers/comments");
app.post("/posts/comments/:idPost", isAuth, commentPost);
app.delete("/posts/comments/:idComment", isAuth, deleteCommentPost);

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
