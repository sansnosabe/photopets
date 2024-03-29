import { Header } from "../components/Header";
import { activateUserService } from "../services/index.js";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export const ValidatedPage = () => {
	const { registrationCode } = useParams();

	const handleActivation = async () => {
		try {
			await activateUserService(registrationCode);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		handleActivation();
	}, []);

	return (
		<div>
			<Header />
			<p className="text-xl mb-5">La cuenta ha sido activada correctamente, disfruta de Photopets.</p>
			<Link to="/users/login" className="text-lg text-[#65BDF0] hover:underline">
				Entrar
			</Link>
		</div>
	);
};
