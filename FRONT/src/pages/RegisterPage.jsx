import Header from "../components/Header";
import { createUser } from "../services/index.js";

import React, { useState } from "react";

export const RegisterPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: "",
		kind: "",
		breed: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await createUser(formData);
			setIsSubmitted(true);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section>
			<Header />
			{isSubmitted ? (
				<p>Para activar su cuenta, por favor revise su correo electrónico.</p>
			) : (
				<form className="border-2 rounded p-5 mt-1 text-gray-400" onSubmit={handleSubmit}>
					<div className="flex flex-col text-start">
						<div className="inline-block pl-1 pb-1">
							<label
								className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent"
								htmlFor="username"
							>
								Usuario
							</label>
						</div>
						<input className="text-sm p-1" type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} />
					</div>

					<div className="flex flex-col text-start pt-4">
						<div className="inline-block pl-1 pb-1">
							<label
								className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent"
								htmlFor="password"
							>
								Contraseña
							</label>
						</div>
						<input className="text-sm p-1" type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
					</div>

					<div className="flex flex-col text-start pt-4">
						<div className="inline-block pl-1 pb-1">
							<label
								className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent"
								htmlFor="email"
							>
								Email
							</label>
						</div>
						<input className="text-sm p-1" type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
					</div>

					<div className="flex flex-col text-start pt-4">
						<div className="inline-block pl-1 pb-1">
							<label className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent" htmlFor="kind">
								¿Que animal eres?
							</label>
						</div>
						<input className="text-sm p-1" type="text" id="kind" name="kind" value={formData.kind} onChange={handleInputChange} />
					</div>

					<div className="flex flex-col text-start pt-4">
						<div className="inline-block pl-1 pb-1">
							<label
								className="font-semibold bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500 bg-clip-text text-transparent"
								htmlFor="breed"
							>
								¿Que raza eres?
							</label>
						</div>
						<input className="text-sm p-1" type="text" id="breed" name="breed" value={formData.breed} onChange={handleInputChange} />
					</div>

					<button className="bg-[#65BDF0] py-1 px-4 text-white font-semibold rounded mt-3" type="submit">
						Registrarse
					</button>
				</form>
			)}
		</section>
	);
};
