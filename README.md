# App de fotos (instapets)

- Aplicación que permite publicar tus fotos (añadiendo o no textos) y que otras personas puedan verlas.

- Permite comentar los posts de los demas.

- Permite dar like a las publicaciones.

## Instalar

- Crear una base de datos vacía en una instancia de MySQL local.

- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

- Ejecutar el comando `npm install` o `npm i` para instalar las dependencias.

- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada.

- Ejecutar `npm run dev` o `npm start` para lanzar el servidor.

## Depencias:

- Express
- Sharp
-
-

## Base de datos

- **`users:`** id, name`*`, kind`*`, breed`*`, email`*`, password`*`, about_me, avatar(default), rol('user(default)', 'admin', 'god'), reg_code, active(boolean), created_at,
  modified_at.

- **`posts:`** id, text, image`*`, id_user, created_at, modified_at.

- **`likes:`** id, value`*`, id_user, id_post, modified_at, created_at.

- **`comments`** id, comment`*`, id_user, id_post, modified_at, created_at.

## Endpoints del usuario

- **POST** - [`/users`] - Crea un usuario pendiente de validar y se envía un correo de verificación. ✅
- **PUT** - [`/users/validate/:registerCode`] - Valida a un usuario recién registrado.
- **POST** - [`/users/login`] - Logging a un usuario retornando un token.

- **GET** - [`/users`] - Retorna información de un usuario. ➡️ `Token`
- **PUT** - [`/users/profile`] - Permite actualizar el perfil del usuario. ➡️ `Token`
- **DELETE** [`/users`] - Eliminar un usuario. `Token`

## Endpoints del post

- **POST** - [`/posts`] - Permite crear una entrada. ➡️ `Token`
- **GET** - [`/posts`] - Retorna el listado de entradas.
- **GET** - [`/posts/:idPost`] - Retorna una entrada en concreto.
- **GET** - [`/posts`] - Búsqueda de post por palabra (por params).

- **POST** [`/posts/:idPost/likes`] - Añade un like a una entrada. `Token`
- **DELETE** [`/posts/:idPost/likes`] - Deshace un like de un post. `Token`
- **DELETE** [`/posts/:idPost`] - Borra un post solo si eres quien lo creó. `Token`

- **POST** [`/posts/:idPost/comments`] - Agregar un comentario a un post. `Token`
- **DELETE** [`/comments/:idComment`] - Eliminar un comentario del post. `Token`

## Para joder al usuario:

- Enviar emails cuando se le da like a un post.

- //**Anuncios personalizados**//(FRONT)
