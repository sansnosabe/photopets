import { useState, useCallback } from "react";
import Modal from "react-modal";

import { createPostService } from "../services";

import { useDropzone } from "react-dropzone";
import dragDrop from "../images/dragDrop.svg";

export const NewPost = ({ updatePosts }) => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await createPostService({ image, text });
			updatePosts();
		} catch (error) {
			console.error("Ha ocurrido un error al crear el post:", error);
		} finally {
			setShowModal(false);
			setImage(null);
			setText("");
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
			<button onClick={() => setShowModal(true)}>Crear nuevo post</button>
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

						<div className="flex flex-col mt-3 mb-1">
							<label htmlFor="text"></label>
							<textarea
								className="bg-white text-gray-500 border p-2 resize-y"
								rows="2"
								id="text"
								value={text}
								onChange={(event) => setText(event.target.value)}
								placeholder="Escribe un pie de foto..."
								required
							></textarea>
						</div>

						<div className="modal-actions">
							<button className="bg-[#65BDF0] rounded" type="submit">
								Crear post
							</button>
							<button className=" bg-gray-500 rounded" onClick={handleCancel}>
								Cancelar
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	);
};
