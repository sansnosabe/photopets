import { useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import { useUsers } from "../hooks/useUsers";

import { UserPostsList } from "../components/UserPostsList";
import { NewPost } from "../components/NewPost";

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
					<NewPost updateUserPosts={updateUserPosts}/>
					<section className="flex justify-center">
						{userPosts.length !== 0 && 
							<UserPostsList userPosts={userPosts.posts} updateUserPosts={updateUserPosts}/>
						}
					</section>
				</div>
			) : (
				<Home />
			)}
		</article>
	);
};
