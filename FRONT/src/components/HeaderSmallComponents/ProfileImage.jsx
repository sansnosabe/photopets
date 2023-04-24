import { Link } from "react-router-dom";

function ProfileImage({ user }) {
	const API_URL = "http://localhost:4000";

	return (
		<Link to={`/${user.username}`}>
			<div className="h-10 w-10 rounded-full overflow-hidden mt-1 mr-2">
				<img className="object-cover w-full h-full transform rotate-90" src={`${API_URL}/${user.avatar}`} alt="imagen" />
			</div>
		</Link>
	);
}

export default ProfileImage;