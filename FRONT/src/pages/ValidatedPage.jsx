import Header from "../components/Header";
import { activateUser } from "../services/index.js";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export const ValidatedPage = () => {
	const { registrationCode } = useParams();

	const handleActivation = async () => {
		try {
			await activateUser(registrationCode);
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
			<p className="text-xl mb-5">Email verificado, disfruta de Photopets.</p>
			<Link to="/users/login" className="text-lg text-[#65BDF0] hover:underline">
				Entrar
			</Link>
		</div>
	);
};
