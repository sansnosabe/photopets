import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToggleMenu from "./ToggleMenu";

import logo from "../../public/images/logo.svg";

function HeaderSmall() {
	const { user } = useContext(AuthContext);

	return (
		<header className="headersmall flex justify-between">
			<Link to={"/"}>
				<img className="h-10 " src={logo} alt="Logo photopets" />
			</Link>

			<div className="p-2 mx-10">
				<input className="border border-gray-500 bg-gray-100 pl-3 p-1" type="text" placeholder="Buscar" />
			</div>

			<div className="flex">
				<Link to={`/${user.username}`}>
					<p className="p-2 font-semibold text-[#65BDF0] hover:underline">{user.username}</p>
				</Link>
				<ToggleMenu />
			</div>
		</header>
	);
}

export default HeaderSmall;

