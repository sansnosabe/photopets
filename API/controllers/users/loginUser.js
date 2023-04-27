const selectUserByEmailQuery = require("../../db/queries/users/selectUserByEmailQuery");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { generateError } = require("../../helpers");
const { SECRET } = process.env;

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			generateError("Faltan campos", 400);
		}

		const user = await selectUserByEmailQuery(email);

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			generateError("Contraseña incorrecta", 401);
		}

		if (!user.active) {
			generateError("Usuario pendiente de activar", 401);
		}

		const userInfo = {
			id: user.id,
			role: user.role,
		};

		const token = jwt.sign(userInfo, SECRET, {
			expiresIn: "7d",
		});

		res.send({
			code: 200,
			status: "ok",
			data: {
				token,
			},
		});
	} catch (err) {
		next(err);
	}
};

module.exports = loginUser;
