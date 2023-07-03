import { UserPosts } from "./UserPosts";

export function UserPostsList({ userPosts, updateUserPosts, onUpdate}) {
	return (
		<section className="flex flex-col max-w-sm min-w-sm items-center space-y-6 p-4">
			{userPosts.map((post) => (
				<UserPosts key={post.post_id} post={post} image={post.image} updateUserPosts={updateUserPosts} onUpdate={onUpdate}/>
			))}
		</section>
	);
}
