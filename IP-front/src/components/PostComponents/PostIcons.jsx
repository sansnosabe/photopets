import { useState, useEffect } from "react";

import { AddLikeButton } from "../AddLikeButton";
import { AddCommentButton } from "../AddCommentButton";
import { DeletePostButton } from "./DeletePostButton";

export function PostIcons({ postId, likedByMe, owner, setShowNewComment, updatePosts, updateUserPosts, onUpdate }) {
	const [showNewCommentState, setShowNewCommentState] = useState(false);

	useEffect(() => {
		setShowNewComment(showNewCommentState);
	}, [showNewCommentState, setShowNewComment]);

	const toggleShowNewComment = () => {
		setShowNewCommentState(!showNewCommentState);
	};
	return (
		<div className="flex justify-between pt-2">
			<div className="flex items-center space-x-2">
				<AddLikeButton
					postId={postId}
					likedByMe={likedByMe}
					updatePosts={updatePosts}
					updateUserPosts={updateUserPosts}
					onUpdate={onUpdate}
				/>
				<button onClick={toggleShowNewComment}>
					<AddCommentButton />
				</button>
			</div>
			<div className="flex items-center">
				<DeletePostButton
					postId={postId}
					owner={owner}
					updatePosts={updatePosts}
					updateUserPosts={updateUserPosts}
					onUpdate={onUpdate}
				/>
			</div>
		</div>
	);
}
