import { useContext, useEffect, useState } from "react";
import { getPostsDataService, deletePostService, getUserPostsService } from "../services";
import { AuthContext } from "../context/AuthContext";

import { useUsers } from "./useUsers";

export const usePosts = () => {
	const { user } = useUsers();
	
	const [posts, setPosts] = useState([]);
	const [refresh, setRefresh] = useState(false);

	const [userPosts, setUserPosts] = useState([]);
	const [userPostsRefresh, setUserPostsRefresh] = useState(false);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const { token } = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const data = await getPostsDataService(token);

				setPosts(data);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		fetchPosts();
	}, [refresh]);

	const updatePosts = () => {
		setRefresh(!refresh);
	};

	useEffect(() => {
		const fetchUserPosts = async (userId) => {
			try {
				setLoading(true);

				const data = await getUserPostsService(userId);

				setUserPosts(data);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		if (user) {
			fetchUserPosts(user.id);
		}
	}, [user, userPostsRefresh]);

	const updateUserPosts = () => {
		setUserPostsRefresh(!userPostsRefresh);
	};

	const deletePost = async (idPost) => {
		await deletePostService(idPost);
		setRefresh(!refresh);
	};

	const getUserPosts = async (idUser) => {
		try {
			setLoading(true);
			const data = await getUserPostsService(idUser);
			setUserPosts(data);
			setLoading(false);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	};

	return { error, loading, posts, userPosts, getUserPosts, updatePosts, updateUserPosts, deletePost };
};
