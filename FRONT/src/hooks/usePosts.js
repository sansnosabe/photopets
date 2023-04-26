import { useContext, useEffect, useState } from "react";
import { getPostsDataService, deletePostService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const usePosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [refresh, setRefresh] = useState(false);
	const { token } = useContext(AuthContext);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);

				const data = await getPostsDataService(token);

				setPosts(data);
				setLoading(false);
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

	const deletePost = (idPost) => {
		deletePostService(idPost);
		updatePosts();
	};

	return { posts, error, loading, updatePosts, deletePost };
};
