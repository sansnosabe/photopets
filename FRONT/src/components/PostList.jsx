import { Post } from './Post';

export const PostList = ({ posts }) => {
  return (
    <section className='flex align-middle justify-center'>
      <div className="flex flex-col max-w-sm items-center space-y-6">
        {posts.posts.map((post) => (
          <Post key={post.post_id} post={post} />
          ))}
      </div>
    </section>
  );
};
