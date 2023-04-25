import { useState, useContext } from "react";
import { UpdateMyUserDataService } from "../services";
import { AuthContext } from "../context/AuthContext";

import "./editProfile.css";
import { EditProfileImage } from "./EditProfileImage";

export function EditProfile() {
	const [username, setUsername] = useState("");
	const [kind, setKind] = useState("");
	const [breed, setBreed] = useState("");
	const [aboutMe, setAboutMe] = useState("");

	const { user } = useContext(AuthContext);

	const API_URL = "http://localhost:4000";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await UpdateMyUserDataService({ username, kind, breed, about_me: aboutMe });
		} catch (error) {
			console.error("Error al actualizar el perfil:", error);
		}
	};

	return (
		<section className="flex flex-col h-full">
			<h2 className="text-xl">Editar perfil</h2>
			<form className="rounded p-5 w-full" onSubmit={handleSubmit}>
				{user && (
					<div className="flex justify-center pb-6">
						<img className="h-20 w-20 rounded-full object-cover transform rotate-90" src={`${API_URL}/${user.avatar}`} alt="imagen" />
						<div className="flex flex-col justify-center items-start pl-4">
							<p className="text-md font-semibold text-[#2298dd]">{user.username}</p>
							<EditProfileImage />
						</div>
					</div>
				)}
				<div className="form-group">
					<label htmlFor="username" className="form-label">
						Usuario
					</label>
					<input id="username" className="form-input" value={username} onChange={(event) => setUsername(event.target.value)}></input>
				</div>

				<div className="form-group">
					<label htmlFor="kind" className="form-label">
						Especie
					</label>
					<input id="kind" className="form-input" value={kind} onChange={(event) => setKind(event.target.value)}></input>
				</div>

				<div className="form-group">
					<label htmlFor="breed" className="form-label">
						Raza
					</label>
					<input id="breed" className="form-input" value={breed} onChange={(event) => setBreed(event.target.value)}></input>
				</div>

				<div className="form-group">
					<label htmlFor="aboutMe" className="form-label">
						Biografía
					</label>
					<textarea id="aboutMe" className="form-input" value={aboutMe} onChange={(event) => setAboutMe(event.target.value)}></textarea>
				</div>

				<button className="bg-[#49aae2] hover:bg-[#2298dd] px-4 py-2 text-white font-semibold rounded" type="submit">
					Guardar cambios
				</button>

				<div className="h-64"></div>
			</form>
		</section>
	);
}
