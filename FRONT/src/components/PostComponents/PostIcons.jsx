import { useState, useEffect } from "react";

import { AddLikeButton } from "../AddLikeButton";
import { AddCommentButton } from "../AddCommentButton";
import { DeletePostButton } from "./DeletePostButton";

export function PostIcons({ postId, setLikes, setShowNewComment, updatePosts }) {
	const [showNewCommentState, setShowNewCommentState] = useState(false);

	useEffect(() => {
		setShowNewComment(showNewCommentState);
	}, [showNewCommentState, setShowNewComment]);

	return (
		<div className="flex justify-between pt-2">
			<div className="flex items-center space-x-2">
				<AddLikeButton postId={postId} setLikes={setLikes} />
				<button onClick={() => setShowNewCommentState(true)}>
					<AddCommentButton />
				</button>
			</div>
			<div className="flex items-center">
				<DeletePostButton postId={postId} updatePosts={updatePosts} />
			</div>
		</div>
	);
}
