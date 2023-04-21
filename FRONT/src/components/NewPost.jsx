import { useState } from "react";
import Modal from "react-modal";
import { createPostService } from "../services";

import { useDropzone } from "react-dropzone";

const NewPost = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createPostService({ image, text });
    } catch (error) {
      console.error("Ha ocurrido un error al crear el post:", error);
    } finally {
      setShowModal(false);
      setImage(null);
      setText("");
    }
  };

  const onDrop = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <button onClick={() => setShowModal(true)}>Crear nuevo post</button>
      <Modal className="my-modal" isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <form className="border-2 rounded p-5 m-3 text-gray-400" onSubmit={handleSubmit}>
          <label htmlFor="image"></label>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Arrastre la imagen aquí...</p>
            ) : (
              <p>Arrastre la imagen aquí, o haga click</p>
            )}
          </div>

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
