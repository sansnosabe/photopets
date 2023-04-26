import { useUsers } from "../hooks/useUsers";
import { Link } from "react-router-dom";
import { ToggleMenu } from "./ToggleMenu";

import { Logo, Input, UserLink, ProfileImage } from "./HeaderSmallComponents";

import "./headerSmall.css";

export function HeaderSmall({ forceUpdate }) {
	const { user } = useUsers(forceUpdate);

	return (
		<header className="h-full px-2 py-4 flex justify-between items-center">
			<Link to={"/"}>
				<Logo />
			</Link>

			<div>
				<Input />
			</div>

			<div className="user-link-large-screen">
				{user && <UserLink user={user} />}
				<ToggleMenu />
			</div>

			<div className="profile-image-large-screen">
				{user && <ProfileImage user={user} />}
				<ToggleMenu />
			</div>
		</header>
	);
}
