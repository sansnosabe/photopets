import LikeButton from "./LikeButton";
import AddMessage from "./AddMessage";

export const PostIcons = ({ postId, setLikes }) => {
	return (
		<div>
			<div className="flex space-x-2 pt-2">
				<LikeButton postId={postId} setLikes={setLikes} />
				<AddMessage postId={postId} />
			</div>
		</div>
	);
};
