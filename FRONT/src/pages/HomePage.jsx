import Header from "../components/Header";
import HeaderSmall from "../components/HeaderSmall";
import usePosts from "../hooks/usePosts";
import { PostList } from "../components/PostList";
import Auth from "../components/Auth";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomePage = () => {
	const { user } = useContext(AuthContext);
	const { posts } = usePosts();

	return user ? (
		<section>
			<HeaderSmall />
			<PostList posts={posts} />
		</section>
	) : (
		<section>
			<div>
				<Header />
				<h2 className="text-xl mb-5">
					Regístrate para ver <span className="gradientTitle">fotos</span> de tus amigos peludos.
				</h2>
				<nav>
					<Auth />
				</nav>
			</div>
		</section>
	);
};
