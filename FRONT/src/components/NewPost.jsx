import { useState, useCallback } from "react";
import Modal from "react-modal";
import { createPostService } from "../services";

import { useDropzone } from "react-dropzone";
import dragDrop from "../images/dragDrop.svg";

const NewPost = ({updatePosts}) => {
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

	const onDrop = useCallback((acceptedFiles) => {
		setImage(acceptedFiles[0]);
		setSelectedFile(acceptedFiles[0]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<>
			<button onClick={() => setShowModal(true)}>Crear nuevo post</button>
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

					<div className="flex flex-col mt-3 mb-1">
						<label htmlFor="text">Descripción</label>
						<textarea className="bg-[#979797]" rows="3" id="text" value={text} onChange={(event) => setText(event.target.value)} required></textarea>
					</div>

					<button className="bg-[#65BDF0] py-1 px-4 text-white font-semibold rounded mt-3" type="submit">
						Crear post
					</button>
				</form>
			</Modal>
		</>
	);
};

export default NewPost;
