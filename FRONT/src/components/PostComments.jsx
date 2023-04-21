import React from "react";

export const PostComments = ({ comments, showComments, setShowComments }) => {
	return (
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
	);
};
