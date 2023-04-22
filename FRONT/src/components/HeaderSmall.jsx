import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToggleMenu from "./ToggleMenu";

import { Logo, Search, Input, UserLink, ProfileImage } from "./HeaderSmallComponents";

function HeaderSmall() {
	const { user } = useContext(AuthContext);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 640px)");
		setIsSmallScreen(mediaQuery.matches);

		const handleScreenResize = (e) => {
			setIsSmallScreen(e.matches);
		};
		mediaQuery.addEventListener("change", handleScreenResize);
		return () => {
			mediaQuery.removeEventListener("change", handleScreenResize);
		};
	}, []);

	const handleSearchClick = () => {
		const inputValue = prompt("Buscar");
		if (inputValue) {
			console.log(`Buscando ${inputValue}...`);
		}
	};

	return (
		<header className="h-full px-2 py-4 flex justify-between align-center">
			<Link to={"/"}>
				<Logo isSmallScreen={isSmallScreen} />
			</Link>

			{isSmallScreen ? <Search isSmallScreen={isSmallScreen} handleSearchClick={handleSearchClick} /> : <Input isSmallScreen={isSmallScreen} />}

			{!isSmallScreen && (
				<div className="flex">
					<UserLink isSmallScreen={isSmallScreen} user={user} />
					<ToggleMenu />
				</div>
			)}

			{isSmallScreen && (
				<div className="flex">
					<ProfileImage isSmallScreen={isSmallScreen} user={user} />
					<ToggleMenu />
				</div>
			)}
		</header>
	);
}

export default HeaderSmall;
