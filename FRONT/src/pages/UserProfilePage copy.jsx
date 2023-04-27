import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { usePosts } from "../hooks/usePosts";
import { useSearchedUser } from "../hooks/useSearchedUser";

import { UserPostsList } from "../components/UserPostsList";

export const UserProfilePage = () => {
	const { id: idUser } = useParams();
	const { getUserPosts, updateUserPosts } = usePosts();
	const { searchedUser } = useSearchedUser(idUser);

	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		if (searchedUser) {
			getUserPosts(searchedUser.id);
		}
	}, [searchedUser, refresh]);

	const handlePostUpdate = () => {
		updateUserPosts();
		setRefresh(!refresh);
	};

	return (
		<article>
			{searchedUser && (
				<div>
					<section className="flex justify-center">
						{searchedUser.length !== 0 && <UserPostsList userPosts={searchedUser.posts} handlePostUpdate={handlePostUpdate} />}
					</section>
				</div>
			)}
		</article>
	);
};
