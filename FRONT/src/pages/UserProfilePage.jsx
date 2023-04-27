import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserPostsService } from "../services";

import { UserPostsList } from "../components/UserPostsList";

export const UserProfilePage = () => {
	const { id: searchedUserId } = useParams();

	const [searchedUser, setSearchedUser] = useState(null);
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const user = await getUserPostsService(searchedUserId);
				setSearchedUser(user);
			} catch (error) {
				console.error(error);
			}
		};

		if (searchedUserId) {
			fetchUser();
		} else {
			setSearchedUser(null);
		}
	}, [searchedUserId, updated]);

	const handleUpdate = () => {
		setUpdated(!updated);
	};

	return (
		<article>
			{searchedUser && (
				<div>
					<section className="flex justify-center">
						{searchedUser.length !== 0 && <UserPostsList userPosts={searchedUser.posts} onUpdate={handleUpdate}/>}
					</section>
				</div>
			)}
		</article>
	);
};
