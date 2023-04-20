import React, { useState } from 'react';
import { addComentService } from '../services';

function AddMessage({ postId }) {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [comment, setComment] = useState('');

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const handleSendClick = async () => {
    try {
      await addComentService(postId, {comment});
      setComment('');
      setIsInputOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isInputOpen ? (
        <div>
          <input type="text" value={comment} onChange={handleInputChange} />
          <button onClick={handleSendClick}>Enviar</button>
        </div>
      ) : (
        <svg
          color="#000000"
          fill="#000000"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
          id="addMessage"
          data-name="addMessage"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsInputOpen(true)}
        >
          <title>Comentar</title>
          <path
            d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      )}
    </div>
  );
}

export default AddMessage;

