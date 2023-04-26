import { Home } from "../components/Home";
import { HeaderSmall } from "../components/HeaderSmall";
import { NewPost } from "../components/NewPost";
import { PostsList } from "../components/PostsList";

import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";

export const HomePage = () => {
	const { user } = useUsers();
	const { posts, updatePosts, loading } = usePosts();

	return (
		<article className="h-full p-2">
			{user ? (
				<section className="flex flex-col justify-start align-top">
					<HeaderSmall />
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
