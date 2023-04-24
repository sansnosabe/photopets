import { useState } from "react";

import { PostHeader, PostImage, PostIcons, PostLikes, PostText, PostComments, NewComment } from "./index";

function Post ({ post }) {
	const [showComments, setShowComments] = useState(false);
	const [likes, setLikes] = useState(post.likes);
	const [showNewComment, setShowNewComment] = useState(false);

	return (
		<article className="w-full bg-gray-100 text-black rounded-lg shadow-md overflow-hidden text-left">
			<div className="p-4">
				<PostHeader owner={post.owner} createdAt={post.created_at} />
				<PostImage imageURL={post.image} />
				<PostIcons postId={post.post_id} setLikes={setLikes} setShowNewComment={setShowNewComment} />
				<PostLikes likes={likes} />
				<PostText text={post.text} />
			</div>
			<PostComments comments={post.comments} showComments={showComments} setShowComments={setShowComments} />
			{showNewComment && (
				<div>
					<NewComment postId={post.post_id} setShowNewComment={setShowNewComment} />
				</div>
			)}
		</article>
	);
};

export default Post;
