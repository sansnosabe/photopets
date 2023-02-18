require("dotenv").config();

const getDB = require("./getDB");

const createTables = async () => {
  let connection;

  try {
    connection = await getDB();

    console.log("Deleting tables...");

    await connection.query("DROP TABLE IF EXISTS comments");
    await connection.query("DROP TABLE IF EXISTS likes");
    await connection.query("DROP TABLE IF EXISTS posts");
    await connection.query("DROP TABLE IF EXISTS users");

    console.log("Creating tables...");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(15) UNIQUE NOT NULL,
      kind VARCHAR(50) NOT NULL,
      breed VARCHAR(50) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      about_me TEXT,
      avatar VARCHAR(100) DEFAULT 'default.jpg',
      role ENUM('user', 'admin', 'god') DEFAULT 'user',
      reg_code VARCHAR(100),
      active ENUM('false', 'true') DEFAULT 'false',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
    );
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS posts (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      text TEXT,
      image VARCHAR(100),
      id_user INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY(id_user) REFERENCES users(id)
    );
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS likes (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      value INT DEFAULT '0',
      id_user INT UNSIGNED NOT NULL,
      id_post INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY(id_user) REFERENCES users(id),
      FOREIGN KEY(id_post) REFERENCES posts(id)
    );
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS comments (
      id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      comment TINYTEXT NOT NULL,
      id_user INT UNSIGNED NOT NULL,
      id_post INT UNSIGNED NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY(id_user) REFERENCES users(id),
      FOREIGN KEY(id_post) REFERENCES posts(id)
    );
    `);

    console.log("Tables created!");
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) connection.release();

    process.exit();
  }
};

createTables();
