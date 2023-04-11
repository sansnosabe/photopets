import usePosts from "../hooks/usePosts";
import { PostList } from '../components/PostList';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loading } from "../components/Loading";

export const PostsPage = () => {
  const { posts, error, loading } = usePosts();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section >
      <h1 className="mt-5 mb-5">Latest posts</h1>
      <PostList  posts={posts} />
    </section>
  );
};

