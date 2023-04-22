import Home from "../components/Home";
import HeaderSmall from "../components/HeaderSmall";
import NewPost from "../components/NewPost";
import PostsList from "../components/PostsList";

import usePosts from "../hooks/usePosts";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {
	const { user } = useContext(AuthContext);
	const { posts } = usePosts();

	return (
		<article className="h-full">
			{user ? (
				<section>
					<HeaderSmall />
					<NewPost />
					{posts.length !== 0 ? (
						<article className="flex justify-center ">
							<PostsList posts={posts} />
						</article>
					) : (
						<article>
							<div>No hay posts disponibles</div>
						</article>
					)}
				</section>
			) : (
				<Home />
			)}
		</article>
	);
};
