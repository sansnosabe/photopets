import { Link } from "react-router-dom";


function UserLink ({ user }) {
	return (
		<Link to={`/${user.username}`}>
			<p className="p-2 font-semibold text-[#65BDF0] hover:underline">{user.username}</p>
		</Link>
	);
};

export default UserLink;