import { useEffect, useState } from "react";
import { getPostsDataService, deletePostService } from "../services";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
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

    fetchPosts();
  }, [refresh]);

  const updatePosts = () => {
    setRefresh(!refresh);
  };

  const deletePost = (idPost) => {
    deletePostService(idPost)
    updatePosts()
  };

  return { posts, error, loading, updatePosts, deletePost };
};

export default usePosts;



