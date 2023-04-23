import { useState, useEffect } from "react";

import AddLikeButton from "../AddLikeButton";
import AddCommentButton from "../AddCommentButton";

function PostIcons({ postId, setLikes, setShowNewComment }) {
	const [showNewCommentState, setShowNewCommentState] = useState(false);

	useEffect(() => {
		setShowNewComment(showNewCommentState);
	}, [showNewCommentState, setShowNewComment]);

	return (
		<div>
			<div className="flex space-x-2 pt-2">
				<AddLikeButton postId={postId} setLikes={setLikes} />
				<button onClick={() => setShowNewCommentState(true)}>
					<AddCommentButton />
				</button>
			</div>
		</div>
	);
}

export default PostIcons;
