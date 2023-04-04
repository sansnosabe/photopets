# App de fotos (instapets)

- Aplicación que permite publicar tus fotos (añadiendo o no textos) y que otras personas puedan verlas.

- Permite comentar los posts de los demas.

- Permite dar like a las publicaciones.

## Instalar

- Crear una base de datos vacía en una instancia de MySQL local.

- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

- Ejecutar el comando `npm install` o `npm i` para instalar las dependencias.

- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos.

- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.

## Base de datos

- **`users:`** id, name`*`, kind`*`, breed`*`, email`*`, password`*`, about_me, avatar(default), rol('user(default)', 'admin', 'god'), reg_code, active(boolean), created_at,
  modified_at.

- **`posts:`** id, text, image`*`, id_user, created_at, modified_at.

- **`likes:`** id, value`*`, id_user, id_post, modified_at, created_at.

- **`comments`** id, comment`*`, id_user, id_post, modified_at, created_at.

## Endpoints del usuario

- **POST** - [`/users`] - Crea un usuario pendiente de validar y envia un correo de verificación. ✅
- **PUT** - [`/users/validate/:registrationCode`] - Valida al usuario registrado con el código de verificación. ✅
- **POST** - [`/users/login`] - Hace el login del usuario devolviendo un token. ✅
- **GET** - [`/users`] - Devuelve la información de todos los usuarios. ✅
- **GET** - [`/user`] - Devuelve la información del usuario logueado. ➡️`Token` ✅
- **PUT** - [`/user/profile`] - Permite actualizar el perfil del usuario(menos password y email). ➡️ `Token` ✅
- **DELETE** [`/user`] - Elimina al usuario logueado. `Token` ✅

## Endpoints de posts

- **POST** - [`/posts`] - Crea un post desde el usuario logueado. ➡️ `Token` ✅
- **GET** - [`/posts`] - Devuelve el listado de todas las publicaciones. ✅
- **GET** - [`/posts/myPosts`] - Devuelve el listado de las publicaciones del usuario logueado. ➡️ `Token`✅
- **GET** - [`/posts/myPosts/:idPost`] - Devuelve la publicación del usuario logueado con el id que le pasas por parametro. ➡️ `Token`✅
- **GET** - [`/posts/:idUser`] - Devuelve las publicaciones del usuario que le pasas por parametro. ✅
- **GET** - [`/posts/:idUser/:idPost`] - Devuelve la publicación del usuario que le pasas por parametro con el id que le pasas por parametro. ✅
- **GET** - [`/postsUsername] - Búsqueda de posts por usuario, por params usando keywords. (Devuelve info de usuario más publicaciones) ✅
- **DELETE** [`/posts/:idPost`] - Borra un post solo si eres quien lo creó. `Token` ✅

  ### Endpoints de likes

  - **POST** [`/posts/:idPost/likes`] - Añade like a un post. `Token` ✅
  - **DELETE** [`/posts/:idPost/dislikes`] - Deshace like de un post. `Token` ✅

  - **POST** [`/posts/:idPost/likeDislike`] - Añade o deshace like de un post. `Token` ✅

  ### Endpoints de comentarios

  - **POST** [`/posts/comments/:idPost`] - Agregar un comentario a un post. `Token` ✅
  - **DELETE** [`posts/comments/:idComment`] - Eliminar un comentario del post. `Token` ✅

# Más adelante(fuera de fecha de proyecto):

- **PUT** - [`/users/profile/email`] - Permite actualizar el email del usuario. ➡️ `Token`
- **PUT** - [`/users/profile/password`] - Permite actualizar la password del usuario. ➡️ `Token`
