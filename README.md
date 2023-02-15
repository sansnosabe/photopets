# App de fotos (instapets)

- Aplicación que permite publicar tus fotos (añadiendo o no textos) y que otras personas puedan verlas.

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

- **`users:`** id, username`*`, email`*`, password`*`, sobreMi, avatar(default), especie`*`, raza`*`, rol('user(default)', 'admin', 'god'), regCode, active(boolean),
  createdAt, modifiedAt.

- **`posts:`** id, title`*`, text, image`*`, id_user, idPhoto, createdAt.

- **`postedPhotos:`** id, name, idPhoto, idPost, modifiedAt, createdAt.

- **`likedPost:`** id, value`*`, idUser, idPost, modifiedAt, createdAt.

## Endpoints del usuario

- **POST** - [`/users`] - Crea un usuario pendiente de validar y se envía un correo de verificación.
- **PUT** - [`/users/validate/:registerCode`] - Valida a un usuario recién registrado.
- **POST** - [`/users/login`] - Logea a un usuario retornando un token.

- **GET** - [`/users`] - Retorna información de un usuario. ➡️ `Token`
- **PUT** - [`/users/profile`] - Permite actualizar el perfil del usuario. ➡️ `Token`
- **DELETE** [/users] - Eliminar un usuario. `Token`

## Endpoints del post

- **POST** - [`/posts`] - Permite crear una entrada. ➡️ `Token`
- **GET** - [`/posts`] - Retorna el listado de entradas.
- **GET** - [`/posts/:idPhoto`] - Retorna una entrada en concreto.
- **GET** - [`/post/search`] - Busqueda de post por palabra (por params).

- **POST** [/posts/:idPhoto/likes] - Añade un like a una entrada. `Token`
- **DELETE** [/posts/:idPhoto/likes] - Deshace un like de un post. `Token`
- **DELETE** [/posts/:id] - Borra un post solo si eres quien lo creó. `Token`

## Para joder al usuario:

- Enviar emails cuando se le da like a un post.

- //**Anuncios personalizados**//(FRONT)
