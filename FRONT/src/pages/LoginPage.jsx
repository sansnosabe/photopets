import Header from "../components/Header";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUserService } from "../services/index.js";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { logIn } = useContext(AuthContext)
	const navigate = useNavigate();

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const data = await loginUserService(email, password);
			logIn(data.token)
			navigate("/")
			
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<section>
			<Header />
			<form className="border-2 rounded p-5 mt-1 text-gray-400" onSubmit={handleSubmit}>
				<div className="flex flex-col text-start">
					<div className="inline-block pl-1 pb-1">
						<label htmlFor="email">
							Email
						</label>
					</div>
					<input className="text-sm p-1" type="email" id="email" value={email} required onChange={handleEmailChange} />
				</div>

				<div className="flex flex-col text-start pt-4">
					<div className="inline-block pl-1 pb-1">
						<label htmlFor="password">
							Password
						</label>
					</div>
					<input className="text-sm p-1" type="password" id="password" value={password} required onChange={handlePasswordChange} />
				</div>
				{error ? <p className="text-red-600 text-left text-[12px] p-1">{error}</p> : null}
				<button className="bg-[#65BDF0] py-1 px-4 text-white font-semibold rounded mt-3" type="submit">Enviar</button>
			</form>
		</section>
	);
};