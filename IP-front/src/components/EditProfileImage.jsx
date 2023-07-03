import { useState, useCallback } from "react";
import Modal from "react-modal";

import { useUsers } from "../hooks/useUsers";

import { useDropzone } from "react-dropzone";
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
		} catch (error) {
			console.error("Ha ocurrido un error al cambiar la imagen:", error);
		} finally {
			setShowModal(false);
			setImage(null);
		}
	};

	const handleCancel = () => {
		setShowModal(false);
	};

	const onDrop = useCallback((acceptedFiles) => {
		setImage(acceptedFiles[0]);
		setSelectedFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<>
			<button onClick={() => setShowModal(true)}>Cambiar avatar</button>
			<Modal className="my-modal" isOpen={showModal} onRequestClose={() => setShowModal(false)}>
				<div className="modal-content">
					<form onSubmit={handleSubmit}>
						<label htmlFor="image"></label>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<div className="flex flex-col justify-center items-center border cursor-pointer p-2">
								<p className="font-semibold">Arrastre la imagen</p>
								<img className="h-8 m-2" src={dragDrop} alt="" />
								<p className="font-semibold">
									o haga click <span className="underline">aquí</span>
								</p>
								{selectedFile && <p className="text-gray-400 text-center">{selectedFile.name}</p>}
							</div>
						</div>


						<div className="modal-actions">
							<button className="bg-[#65BDF0] rounded" type="submit">
								Cambiar
							</button>
							<button className="bg-gray-500 rounded" onClick={handleCancel}>
								Cancelar
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	);
}
