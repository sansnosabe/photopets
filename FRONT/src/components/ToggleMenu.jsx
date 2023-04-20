import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import adjust from "../images/adjust.svg";

function ToggleMenu() {
	const { logOut } = useContext(AuthContext);

	const [showMenu, setShowMenu] = useState(false);

	const handleToggle = () => {
		setShowMenu(!showMenu);
	};


	return (
		<div className="toggle">
			<button onClick={handleToggle}>
				<img className="h-6" src={adjust} alt="" />
			</button>
			{showMenu && (
				<div className="menu">
					<ul>
						<Link to="/">
							<li onClick={() => logOut()}>Cerrar sesión</li>
						</Link>
						<Link to="/settings">
							<li>Ajustes</li>
						</Link>
						<li onClick={() => setShowMenu(false)}>Cancelar</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default ToggleMenu;
