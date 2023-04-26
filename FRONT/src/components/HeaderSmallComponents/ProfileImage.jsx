import { Link } from "react-router-dom";

export function ProfileImage({ user }) {
	return (
		<Link to={`/${user.username}`}>
			<div className="h-10 w-10 rounded-full overflow-hidden mt-1 mr-2">
				<img className="object-cover w-full h-full transform" src={`${import.meta.env.VITE_BACKEND}/public/${user.avatar}`} />
			</div>
		</Link>
	);
}
