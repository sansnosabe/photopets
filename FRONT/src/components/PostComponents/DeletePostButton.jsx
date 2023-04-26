import usePosts from "../../hooks/usePosts";

export function DeletePostButton({ postId, updatePosts }) {
	const { deletePost } = usePosts();

	const handleDelete = () => {
		deletePost(postId);
		updatePosts();
	};

	return (
		<button onClick={handleDelete}>
			<svg width="27px" height="27px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<title>Eliminar</title>
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Trash">
						<rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
						<path
							d="M6,6 L6.96683,19.5356 C6.98552,19.7973 7.20324,20 7.46556,20 L16.5344,20 C16.7968,20 17.0145,19.7973 17.0332,19.5356 L18,6"
							id="Path"
							stroke="#0C0310"
							strokeWidth="2"
							strokeLinecap="round"
						></path>
						<line x1="4" y1="6" x2="20" y2="6" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"></line>
						<line x1="10" y1="10" x2="10" y2="16" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"></line>
						<line x1="14" y1="10" x2="14" y2="16" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"></line>
						<path
							d="M15,6 C15,4.34315 13.6569,3 12,3 C10.3431,3 9,4.34315 9,6"
							id="Path"
							stroke="#0C0310"
							strokeWidth="2"
							strokeLinecap="round"
						></path>
					</g>
				</g>
			</svg>
		</button>
	);
}
