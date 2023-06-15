const PORT = process.env.PORT || 3000;
const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASS = process.env.MYSQL_PASS || 12345678;
const MYSQL_DB = process.env.MYSQL_DB || 'instapets';
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;

module.exports = {
	PORT: PORT,
	MYSQL_HOST: MYSQL_HOST,
	MYSQL_USER: MYSQL_USER,
	MYSQL_PASS: MYSQL_PASS,
	MYSQL_DB: MYSQL_DB,
	MYSQL_PORT: MYSQL_PORT,
};
