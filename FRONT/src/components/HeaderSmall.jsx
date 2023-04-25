import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";

import { Logo, Search, Input, UserLink, ProfileImage } from "./HeaderSmallComponents";

import "./headerSmall.css";

function HeaderSmall() {
	const { user } = useContext(AuthContext);

	const handleSearchClick = () => {
		const inputValue = prompt("Buscar");
		if (inputValue) {
			console.log(`Buscando ${inputValue}...`);
		}
	};

	return (
		<header className="h-full px-2 py-4 flex justify-between align-center">
			<Link to={"/"}>
				<Logo />
			</Link>

			<div className="input-large-screen">
				<Input />
			</div>

			<div className="search-large-screen">
				<Search handleSearchClick={handleSearchClick} />
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

export default HeaderSmall;
