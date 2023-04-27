import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";

import { UserPostsList } from "../components/UserPostsList";
import { NewPost } from "../components/NewPost";
import { Home } from "../components/Home";

export const MyProfilePage = () => {
	const { user } = useUsers();
	const { userPosts, getUserPosts, updateUserPosts } = usePosts();

	useEffect(() => {
		if (user) {
			getUserPosts(user.id);
		}
	}, [user]);

	return (
		<article>
			{user ? (
				<div>
					<NewPost updateUserPosts={updateUserPosts} />
					<header className="flex justify-center items-center space-x-10 mb-5">
						<figure className="">
							<img className="h-52 w-52 rounded-xl object-cover transform" src={`${import.meta.env.VITE_BACKEND}/public/${user.avatar}`} alt={user.username} />
						</figure>
						<main className="w-[100%]">
							<div className="flex justify-between">
								<h1 className="text-2xl text-left pl-1 font-bold mt-4">{user.username}</h1>
							</div>
							<div className="flex mt-2">
								<span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs font-bold mr-2">{user.breed}</span>
								<span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs font-bold">{user.kind}</span>
							</div>
							<h2 className="text-lg text-left pt-4 text-gray-500">{user.about_me}</h2>
						</main>
					</header>

					<section className="flex justify-center">
						{userPosts.length !== 0 && <UserPostsList userPosts={userPosts.posts} updateUserPosts={updateUserPosts} />}
					</section>
				</div>
			) : (
				<Home />
			)}
		</article>
	);
};
