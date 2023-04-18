import Header from "../components/Header";
import { loginUser } from "../services/index.js";

import React, { useState } from "react";

export const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = await loginUser(email, password);
			console.log(data);
			console.log("Formulario enviado:", email, password);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section>
			<Header />
			<form className="border-2 rounded p-5 mt-1 text-gray-400" onSubmit={handleSubmit}>
				<div className="flex flex-col text-start">
					<div className="inline-block pl-1 pb-1">
						<label className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent" htmlFor="email">
							Email
						</label>
					</div>
					<input className="text-sm p-1" type="email" id="email" value={email} onChange={handleEmailChange} />
				</div>

				<div className="flex flex-col text-start pt-4">
					<div className="inline-block pl-1 pb-1">
						<label className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent" htmlFor="password">
							Password
						</label>
					</div>
					<input className="text-sm p-1" type="password" id="password" value={password} onChange={handlePasswordChange} />
				</div>
				<button className="bg-[#65BDF0] py-1 px-4 text-white font-semibold rounded mt-3" type="submit">Enviar</button>
			</form>
		</section>
	);
};


// gatoastuto@photopets.wouf
// miau1234