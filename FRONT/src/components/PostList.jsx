import { Post } from './Post';

export const PostList = ({ posts }) => {
  return (
    <div className="grid max-w-sm items-center space-y-6">
      {posts.posts.map((post) => (
        <Post key={post.post_id} post={post} />
      ))}
    </div>
  );
};
