import LikeButton from "../LikeButton";
import NewComment from "../NewComment";

function PostIcons({ postId, setLikes }) {
	return (
		<div>
			<div className="flex space-x-2 pt-2">
				<LikeButton postId={postId} setLikes={setLikes} />
				<NewComment postId={postId} />
			</div>
		</div>
	);
}

export default PostIcons;
