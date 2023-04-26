import { useMyPosts } from '../hooks/useMyPosts';
import { useUsers } from '../hooks/useUsers';

export const MyPostsPage = () => {
  const { user } = useUsers();
  const { myPosts, updatePosts, loading } = useMyPosts();

  return (
    <article className='p-2'>
      {user ? (
        <section className=''>
          <NewPost updatePosts={updatePosts} />
          {!loading && myPosts.length !== 0 && (
            <article className='flex justify-center'>
              <PostsList posts={myPosts} updatePosts={updatePosts} />
            </article>
          )}
        </section>
      ) : (
        <Home />
      )}
    </article>
  );
};
