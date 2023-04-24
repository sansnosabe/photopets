import Post from "./PostComponents/Post";

function PostsList({ posts: { posts } }) {
	return (
		<section className="flex flex-col max-w-sm items-center space-y-6 p-4">
			{posts.map((post) => (
				<Post key={post.post_id} post={post} image={post.image} />
			))}
		</section>
	);
}

export default PostsList;