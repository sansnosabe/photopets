import { useContext, useEffect, useState } from 'react';
import { getMyPostsDataService, deletePostService } from '../services';
import { AuthContext } from '../context/AuthContext';
import jwt from 'jsonwebtoken';

export const useMyPosts = () => {
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refresh, setRefresh] = useState(false);
  const { token } = useContext(AuthContext);
  const { userId } = jwt.decode(token, 'jdslkfjsdd');
  const decodedToken = jwt.verify(token, 'jdslkfjsdd');


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const data = await getMyPostsDataService(`/posts/${decodedToken.Id}`,token);

        setMyPosts(data);
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
  };

  return { myPosts, error, loading, updatePosts, deletePost };
};
