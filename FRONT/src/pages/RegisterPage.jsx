import Header from "../components/Header";
import { createUserService } from "../services/index.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email: "",
		kind: "",
		breed: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			await createUserService(formData);
			setIsSubmitted(true);
		} catch (error) {
			setError(error.message);
		} finally {
			setTimeout(() => setIsLoading(false), 3000);
		}
	};

	return (
		<section>
			<Header />
			{isSubmitted ? (
				<div className="text-xl">
					<p className="pb-3">Por favor revise su correo electrónico para activar la cuenta.</p>
					<Link to="/users/login" className="text-[#65BDF0] hover:underline">
						Inicio
					</Link>
				</div>
			) : (
				<>
					{isLoading ? (
						<div className="flex justify-center mt-4">
							<div className="loader"></div>
						</div>
					) : (
						<form className="border-2 rounded p-5 m-3 text-gray-400" onSubmit={handleSubmit}>
							<div className="flex flex-col text-start">
								<div className="inline-block pl-1 pb-1">
									<label htmlFor="username">Usuario</label>
								</div>
								<input
									className="text-sm p-1"
									type="text"
									id="username"
									name="username"
									required
									value={formData.username}
									onChange={handleInputChange}
								/>
							</div>

							<div className="flex flex-col text-start pt-4">
								<div className="inline-block pl-1 pb-1">
									<label htmlFor="password">Contraseña</label>
								</div>
								<input
									className="text-sm p-1"
									type="password"
									id="password"
									name="password"
									required
									value={formData.password}
									onChange={handleInputChange}
								/>
							</div>

							<div className="flex flex-col text-start pt-4">
								<div className="inline-block pl-1 pb-1">
									<label htmlFor="email">Email</label>
								</div>
								<input className="text-sm p-1" type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} />
							</div>

							<div className="flex flex-col text-start pt-4">
								<div className="inline-block pl-1 pb-1">
									<label htmlFor="kind">¿Que animal eres?</label>
								</div>
								<input className="text-sm p-1" type="text" id="kind" name="kind" required value={formData.kind} onChange={handleInputChange} />
							</div>

							<div className="flex flex-col text-start pt-4">
								<div className="inline-block pl-1 pb-1">
									<label htmlFor="breed">¿Que raza eres?</label>
								</div>
								<input className="text-sm p-1" type="text" id="breed" name="breed" required value={formData.breed} onChange={handleInputChange} />
							</div>

							{error ? <p className="text-red-600 text-left text-[12px] p-1">{error}</p> : null}

							<button className="bg-[#65BDF0] py-1 px-4 text-white font-semibold rounded mt-3" type="submit">
								Registrarse
							</button>
						</form>
					)}
				</>
			)}
		</section>
	);
};
