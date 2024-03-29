import { Link } from "react-router-dom";

import logo from "../../public/images/logo.svg";

export function Header() {
	return (
		<header className="flex justify-center">
			<Link to={"/"}>
				<img className="h-32" src={logo} alt="Logo photopets" />
			</Link>
		</header>
	);
}
