import { Link } from "react-router-dom";

export function UserLink({ user }) {
	return (
		<Link to={`/${user.username}`}>
			<p className="p-2 pr-3 font-semibold text-[#f22b96] hover:underline">@{user.username}</p>
		</Link>
	);
}