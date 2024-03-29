import { useState } from "react";
import { addComentService } from "../../services";

export function NewComment({ postId, setShowNewComment, updatePosts, updateUserPosts, onUpdate }) {
	const [comment, setComment] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await addComentService(postId, { comment });
			setComment("");
			setShowNewComment(false);
			if (updatePosts) {
				updatePosts();
			}
			if (updateUserPosts) {
				updateUserPosts();
			}
			if (onUpdate) {
				onUpdate();
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="p-4">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={comment}
					onChange={(event) => setComment(event.target.value)}
					placeholder="Añade un comentario..."
					className="border rounded-lg p-2 bg-gray-200 text-black font-normal"
				/>
				<button type="submit" className="px-4 py-2 rounded-lg hover:underline">
					Enviar
				</button>
			</form>
		</div>
	);
}
