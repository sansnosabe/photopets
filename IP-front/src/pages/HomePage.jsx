import { Home } from "../components/Home";
import { NewPost } from "../components/NewPost";
import { PostsList } from "../components/PostsList";

import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";

export const HomePage = () => {
	const { user } = useUsers();
	const { posts, updatePosts } = usePosts();

	return (
		<article>
			{user ? (
				<div>
					<NewPost updatePosts={updatePosts} />
					<section className="flex justify-center">
						{posts.length !== 0 && 
							<PostsList posts={posts} updatePosts={updatePosts} />
						}
					</section>
				</div>
			) : (
				<Home />
			)}
		</article>
	);
};
