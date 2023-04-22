import { Link } from "react-router-dom";

function ProfileImage({ user }) {
	return (
		<Link to={`/${user.username}`}>
			<img src={user.image} alt="imagen" />
		</Link>
	);
}

export default ProfileImage;
