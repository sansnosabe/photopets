import { Home } from "../components/Home";
import { NewPost } from "../components/NewPost";
import { PostsList } from "../components/PostsList";

import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";

export const HomePage = () => {
	const { user } = useUsers();
	const { posts, updatePosts, loading } = usePosts();

	return (
		<article className="p-2">
			{user ? (
				<section className="">
					<NewPost updatePosts={updatePosts} />
					{!loading && posts.length !== 0 && (
						<article className="flex justify-center">
							<PostsList posts={posts} updatePosts={updatePosts} />
						</article>
					)}
				</section>
			) : (
				<Home />
			)}
		</article>
	);
};
