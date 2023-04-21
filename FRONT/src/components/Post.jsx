import { useState } from "react";

import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";
import { PostIcons } from "./PostIcons";
import { PostLikes } from "./PostLikes";
import { PostText } from "./PostText";
import { PostComments } from "./PostComments";

export const Post = ({ post }) => {
	const [showComments, setShowComments] = useState(false);
	const [likes, setLikes] = useState(post.likes);

	return (
		<article className="w-full bg-white rounded-lg shadow-md overflow-hidden text-left">
			<div className="p-4">
				<PostHeader owner={post.owner} createdAt={post.created_at} />
				<PostImage imageURL={post.image} />
				<PostIcons postId={post.post_id} setLikes={setLikes} />
				<PostLikes likes={likes}/>
				<PostText text={post.text}/>
			</div>
			<PostComments comments={post.comments} showComments={showComments} setShowComments={setShowComments} />
		</article>
	);
};
