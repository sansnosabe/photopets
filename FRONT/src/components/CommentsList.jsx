import React from "react";

const CommentsList = ({ comments }) => (
	<div className="px-4 pt-2">
		{comments.map((comment) => (
			<div className="flex space-x-1 mb-2" key={comment.id}>
				<p className="text-black font-medium">
					{comment.user} <span className="font-normal">{comment.comment}</span>
				</p>
			</div>
		))}
	</div>
);

export default CommentsList;
