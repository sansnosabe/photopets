import { Post } from "./Post";

export function PostsList({ posts: { posts }, updatePosts }) {
	console.log(posts);
	return (
		<section className="flex flex-col max-w-sm min-w-sm items-center space-y-6 p-4">
			{posts.map((post) => (
				<Post key={post.post_id} post={post} image={post.image} updatePosts={updatePosts} />
			))}
		</section>
	);
}
