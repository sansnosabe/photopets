import { useState } from "react";
import { useUsers } from "../hooks/useUsers";

import { EditProfileImage } from "./EditProfileImage";
import { Modal } from "./Modal";

import "./editProfile.css";

export function EditProfile({ forceUpdate }) {
	const { user, updateProfile, deleteUser } = useUsers(forceUpdate);
	const [showModal, setShowModal] = useState(false);

	const [username, setUsername] = useState("");
	const [kind, setKind] = useState("");
	const [breed, setBreed] = useState("");
	const [aboutMe, setAboutMe] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await updateProfile(username, kind, breed, aboutMe);
			setUsername("");
			setKind("");
			setBreed("");
			setAboutMe("");
			setError(false);
		} catch (error) {
			console.error("Error al actualizar el perfil:", error.message);
			setError(true);
		}
	};

	const handleDelete = () => {
		setShowModal(true);
	};

	const handleConfirm = async () => {
		try {
			await deleteUser();
			setShowModal(false);
		} catch (error) {
			console.error("Error al actualizar el perfil:", error.message);
			setError(true);
		}
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	return (
		<section className="flex flex-col">
			<h2 className="text-xl pb-4">Editar perfil</h2>

			{user && (
				<div className="flex justify-center pb-1">
					<img className="h-20 w-20 rounded-full object-cover transform" src={`${import.meta.env.VITE_BACKEND}/public/${user.avatar}`} />
					<div className="flex flex-col justify-center items-start pl-4">
						<p className="text-md font-semibold text-[#2298dd]">{user.username}</p>
						<EditProfileImage forceUpdate={forceUpdate} />
					</div>
				</div>
			)}
			<div className="flex justify-center">
				<button className="text-red-500 w-36 p-2 hover:underline" onClick={handleDelete}>
					Eliminar usuario
				</button>
			</div>

			<form className="rounded p-5 w-full" onSubmit={handleSubmit}>
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
						Sobre mi
					</label>
					<textarea
						id="aboutMe"
						className="form-input"
						maxLength={50}
						value={aboutMe}
						onChange={(event) => {
							if (event.target.value.length <= 50) {
								setAboutMe(event.target.value);
							}
						}}
					></textarea>
				</div>

				<button className="bg-[#49aae2] hover:bg-[#2298dd] px-4 py-2 text-white font-semibold rounded" type="submit">
					Guardar cambios
				</button>

				{error && <p className="text-red-500 mt-2">Este usuario no está disponible</p>}

				<div className="h-64"></div>
			</form>
			<Modal show={showModal} onConfirm={handleConfirm} onCancel={handleCancel}>
				<p>¿Estás seguro de que quieres eliminar este usuario?</p>
			</Modal>
		</section>
	);
}
