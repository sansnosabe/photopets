import moment from "moment";
import "moment/locale/es";
import { useState } from "react";

import LikeButton from "./LikeButton";
import AddMessage from "./AddMessage";

moment.locale("es");

export const Post = ({ post }) => {
	const createdAt = moment(post.created_at);
	const [showComments, setShowComments] = useState(false);
	const [likes, setLikes] = useState(post.likes);
	const commentsLength = post.comments_count;

	return (
		<article className="w-full bg-white rounded-lg shadow-md overflow-hidden text-left">
			<div className="p-4">
				<div className="flex space-x-1">
					<p className="text-black text-sm font-medium mb-2">{post.owner}</p>
					<p className="text-sm font-medium mb-2">· {createdAt.fromNow()}</p>
				</div>
				<img className="object-cover w-full h-48" src={post.image} alt="imagen de post" />
				<div className="flex space-x-2">
					<LikeButton postId={post.post_id} setLikes={setLikes} />
					<AddMessage postId={post.post_id}/>
				</div>
				<div className="flex items-center justify-between">
					<p className="text-black text-sm font-medium pt-2 pb-1">{likes} Me gusta</p>
				</div>
				<p className="text-black text-base mb-2">{post.text}</p>
			</div>
			{commentsLength === 1 && (
				<div className="p-4">
					<p className="text-black font-medium mb-2">
						{post.comments[0].user} <span className="font-normal">{post.comments[0].comment}</span>
					</p>
				</div>
			)}

			{commentsLength > 1 && (
				<div>
					<p className="text-black text-base  px-4 cursor-pointer" onClick={() => setShowComments(!showComments)}>
						Ver los {post.comments_count} comentarios
					</p>
					{showComments && (
						<div className="px-4 pt-2">
							{post.comments.map((comment) => (
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
		</article>
	);
};

