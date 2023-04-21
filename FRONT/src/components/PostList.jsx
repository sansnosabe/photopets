import { Post } from "./Post";

export const PostList = ({ posts: { posts } }) => {
	return (
		<section className="flex flex-col max-w-sm items-center space-y-6 p-4 bg-red-200 w-[800px]">
			{posts.map((post) => (
				<Post key={post.post_id} post={post} />
			))}
		</section>
	);
};
