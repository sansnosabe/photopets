import { useEffect, useState } from "react";
import { getPostsDataService } from "../services";

const usePosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const loadPosts = async () => {
			try {
				setLoading(true);

				const data = await getPostsDataService();

				setPosts(data);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};

		if (posts.length === 0) {
			loadPosts();
		}
	}, [posts]);

	return { posts, error, loading };
};

export default usePosts;

