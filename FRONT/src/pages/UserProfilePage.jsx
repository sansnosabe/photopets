import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPostsService, getUsersDataService } from "../services";

import { UserPostsList } from "../components/UserPostsList";

export const UserProfilePage = () => {
	const { id: searchedUserId } = useParams();

	const [searchedUser, setSearchedUser] = useState(null);
	const [userPosts, setUserPosts] = useState([]);
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const posts = await getUserPostsService(searchedUserId);
				const { users } = await getUsersDataService();

				const user = users.find((user) => user.id === parseInt(searchedUserId));

				setSearchedUser(user);
				setUserPosts(posts);
			} catch (error) {
				console.error(error);
			}
		};

		if (searchedUserId) {
			fetchUser();
		} else {
			setSearchedUser(null);
			setUserPosts([]);
		}
	}, [searchedUserId, updated]);

	const handleUpdate = () => {
		setUpdated(!updated);
	};

	return (
		<article>
			{searchedUser && (
				<div>
						<header className="flex justify-center items-center space-x-10 mb-5 mt-3">
							<figure>
								<img
									className="h-40 w-40 rounded-full object-cover transform"
									src={`${import.meta.env.VITE_BACKEND}/public/${searchedUser.avatar}`}
									alt={searchedUser.username}
								/>
							</figure>
							<main>
								<h1 className="text-2xl text-left pl-1 font-bold">{searchedUser.username}</h1>
								<div className="flex mt-2">
									<span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs font-bold mr-2">{searchedUser.breed}</span>
									<span className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs font-bold">{searchedUser.kind}</span>
								</div>
								<h2 className="text-lg text-left pt-4 text-gray-500">{searchedUser.about_me}</h2>
							</main>
						</header>
						
						<section className="flex justify-center">
							{searchedUser.length !== 0 && <UserPostsList userPosts={userPosts.posts} onUpdate={handleUpdate} />}
						</section>

				</div>
			)}
		</article>
	);
};
