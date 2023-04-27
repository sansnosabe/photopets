import { useState } from "react";

import { PostHeader, PostImage, PostIcons, PostLikes, PostText, PostComments, NewComment } from "./PostComponents";

export function UserPosts({ post, updatePosts, updateUserPosts }) {
	const [showComments, setShowComments] = useState(false);
	const [showNewComment, setShowNewComment] = useState(false);

	return (
		<article className="w-full bg-gray-100 text-black rounded-lg shadow-md overflow-hidden text-left">
			<div className="p-4">
				<PostHeader owner={post.owner} createdAt={post.created_at} />
				<PostImage imageURL={post.image} />
				<PostIcons postId={post.post_id} likedByMe={post.likedByMe} owner={post.owner} setShowNewComment={setShowNewComment} updatePosts={updatePosts} updateUserPosts={updateUserPosts}/>
				<PostLikes likes={post.likes} />
				<PostText text={post.text} />
			</div>
			<PostComments comments={post.comments} showComments={showComments} setShowComments={setShowComments} />
			{showNewComment && (
				<div>
					<NewComment postId={post.post_id} setShowNewComment={setShowNewComment} updatePosts={updatePosts} updateUserPosts={updateUserPosts}/>
				</div>
			)}
		</article>
	);
}
