import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToggleMenu from "./ToggleMenu";

import logo from "../../public/images/logo.svg";
import ph from "../images/ph.svg";

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
				{isSmallScreen && (
					<figure className="header-ph">
						<img className="h-10 w-full" src={ph} alt="Logo photopets" />
					</figure>
				)}
				{!isSmallScreen && (
					<figure>
						<img className="h-11 w-full" src={logo} alt="Logo photopets" />
					</figure>
				)}
			</Link>

			{isSmallScreen && (
				<div className="p-1 mx-2">
					<button onClick={handleSearchClick}>
						<svg aria-label="Explorar" className="_ab6-" color="#ff3040" fill="#ff3040" height="24" role="img" viewBox="0 0 24 24" width="24">
							<path
								d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							></path>
							<line
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								x1="16.511"
								x2="22"
								y1="16.511"
								y2="22"
							></line>
						</svg>
					</button>
				</div>
			)}

			{!isSmallScreen && (
				<div className="p-1 mx-10">
					<input className="border border-gray-500 bg-gray-100 pl-3 p-1" type="text" placeholder="Buscar" />
				</div>
			)}

			{!isSmallScreen && (
				<div className="flex">
					<Link to={`/${user.username}`}>
						<p className="p-2 font-semibold text-[#65BDF0] hover:underline">{user.username}</p>
					</Link>
					<ToggleMenu />
				</div>
			)}

			{isSmallScreen && (
				<div className="flex">
					<Link to={`/${user.username}`}>
						<img src={user.image} alt="imagen" />
					</Link>
					<ToggleMenu />
				</div>
			)}
		</header>
	);
}

export default HeaderSmall;
