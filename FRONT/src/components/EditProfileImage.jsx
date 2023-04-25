import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";

import { useUsers } from "../hooks/useUsers";

import dragDrop from "../images/dragDrop.svg";

export function EditProfileImage({ forceUpdate }) {
	const { updateAvatar } = useUsers(forceUpdate);

	const [image, setImage] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await updateAvatar(image);
			window.location.reload()
		} catch (error) {
			console.error("Ha ocurrido un error al cambiar la imagen:", error);
		} finally {
			setShowModal(false);
			setImage(null);
		}
	};

	const onDrop = useCallback((acceptedFiles) => {
		setImage(acceptedFiles[0]);
		setSelectedFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<>
			<button onClick={() => setShowModal(true)}>Cambiar avatar</button>
			<Modal className="my-modal" isOpen={showModal} onRequestClose={() => setShowModal(false)}>
				<form className="border-2 rounded p-10 m-3 text-gray-400" onSubmit={handleSubmit}>
					<label htmlFor="image"></label>
					<div {...getRootProps()}>
						<input {...getInputProps()} />
						<div className="flex justify-center">
							{isDragActive ? (
								<img className="h-12" src={dragDrop} alt="" />
							) : (
								<p className="text-[#65BDF0]">Arrastre la imagen aquí, o haga click</p>
							)}
						</div>
						{selectedFile && <p className="text-white">{selectedFile.name}</p>}
					</div>

					<button className="bg-[#65BDF0] py-1 px-4 text-white font-semibold rounded mt-3" type="submit">
						Cambiar imagen de perfil
					</button>
				</form>
			</Modal>
		</>
	);
}
