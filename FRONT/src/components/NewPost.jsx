import { useState } from "react";
import Modal from "react-modal";
import { createPostService } from "../services";

import Dropzone from "react-dropzone";

const NewPost = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState("");
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await createPostService({ image, text });
			console.log("¡El post se ha creado exitosamente!");
		} catch (error) {
			console.error("Ha ocurrido un error al crear el post:", error);
		} finally {
			setShowModal(false);
			setImage("");
			setText("");
		}
	};

	return (
		<>
			<button onClick={() => setShowModal(true)}>Crear nuevo post</button>
			<Modal className="my-modal" isOpen={showModal} onRequestClose={() => setShowModal(false)}>
				<form className="border-2 rounded p-5 m-3  text-gray-400" onSubmit={handleSubmit}>
					<label htmlFor="image"></label>
					{/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)} >
						{({ getRootProps, getInputProps }) => (
							<section>
								<div {...getRootProps()}>
									<input {...getInputProps()} />
									<p>Arrastre la imagen aquí, o haga click</p>
								</div>
							</section>
						)}
					</Dropzone> */}
					<input type="file" id="image" accept="image/*" onChange={(event) => setImage(event.target.files[0])} required />

					<div className="flex flex-col">
						<label htmlFor="text">Descripción</label>
						<textarea id="text" value={text} onChange={(event) => setText(event.target.value)} required></textarea>
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
