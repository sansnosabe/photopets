import React from "react";

function PostComments({ comments, showComments, setShowComments }) {
	if (comments.length === 0) {
		return null;
	}

	return (
		<div>
			{comments.length === 1 ? (
				<div className="px-4 pt-2">
					<div className="flex space-x-1 mb-2" key={comments[0].id}>
						<p className="text-black font-medium">
							{comments[0].user} <span className="font-normal">{comments[0].comment}</span>
						</p>
					</div>
				</div>
			) : (
				<div>
					<p className="text-black text-base px-4 cursor-pointer pb-1" onClick={() => setShowComments(!showComments)}>
						Ver los comentarios
					</p>
					{showComments && (
						<div className="px-4 pt-2">
							{comments.map((comment) => (
								<div className="flex space-x-1 mb-2" key={comment.id}>
									<p className="text-black font-medium">
										{comment.user} <span className="font-normal">{comment.comment}</span>
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default PostComments;
