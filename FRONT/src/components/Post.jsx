import { useState, useEffect } from "react";
import { getUsersDataService } from "../services";

import { PostHeader, PostImage, PostIcons, PostLikes, PostText, PostComments, NewComment } from "./PostComponents";

export function Post({ post, updatePosts }) {
	const [showComments, setShowComments] = useState(false);
	const [showNewComment, setShowNewComment] = useState(false);
	const [profileImage, setProfileImage] = useState(null);

	const postOwner = post.owner;

	useEffect(() => {
		const fetchProfileImage = async () => {
			try {
				const { users } = await getUsersDataService();
				const user = users.find((user) => user.username === postOwner);
				setProfileImage(user.avatar);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProfileImage();
	}, [postOwner]);

	return (
		<article className="w-full bg-gray-100 text-black rounded-lg shadow-md overflow-hidden text-left">
			<div className="p-4">
				<PostHeader owner={post.owner} createdAt={post.created_at} profileImage={profileImage} />
				<PostImage imageURL={post.image} />
				<PostIcons postId={post.post_id} likedByMe={post.likedByMe} owner={post.owner} setShowNewComment={setShowNewComment} updatePosts={updatePosts}/>
				<PostLikes likes={post.likes} />
				<PostText text={post.text} />
			</div>
			<PostComments comments={post.comments} showComments={showComments} setShowComments={setShowComments} />
			{showNewComment && (
				<div>
					<NewComment postId={post.post_id} setShowNewComment={setShowNewComment} updatePosts={updatePosts} />
				</div>
			)}
		</article>
	);
}

