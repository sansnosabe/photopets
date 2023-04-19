import { Post } from './Post';

export const PostList = ({ posts: {posts} }) => {
  return (
    <section className='flex justify-center'>
      <div className="flex flex-col max-w-sm items-center space-y-6">
        {posts.map((post) => (
          <Post key={post.post_id} post={post} />
          ))}
      </div>
    </section>
  );
};