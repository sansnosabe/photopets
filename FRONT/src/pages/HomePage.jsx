import Header from "../components/Header";
import HeaderSmall from "../components/HeaderSmall";
import usePosts from "../hooks/usePosts";
import { PostList } from "../components/PostList";
import Auth from "../components/Auth";
import NewPost from "../components/NewPost";

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
							<PostList posts={posts}/>
						</article>
					) : (
						<article>
							<div>No hay posts disponibles</div>
						</article>
					)}
				</section>
			) : (
				<section className="h-full flex flex-col justify-center align-center">
					<Header />
					<h2 className="text-xl mb-5">
						Regístrate para ver <span className="gradientTitle">fotos</span> de tus amigos peludos.
					</h2>
					<nav className="flex justify-center">
						<Auth />
					</nav>
				</section>
			)}
		</article>
	);
};
