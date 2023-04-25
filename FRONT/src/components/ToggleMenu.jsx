import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import adjust from "../images/adjust.svg";

export function ToggleMenu() {
	const { logOut } = useContext(AuthContext);

	const [showMenu, setShowMenu] = useState(false);

	const handleToggle = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="toggle">
			<button onClick={handleToggle}>
				<img className="h-7" src={adjust} alt="" />
			</button>
			{showMenu && (
				<div className="menu">
					<ul>
						<Link to="/accounts/edit">
							<li onClick={() => setShowMenu(false)}>Editar perfil</li>
						</Link>
						<li onClick={() => logOut()}>Cerrar sesión</li>
						<li onClick={() => setShowMenu(false)}>Cancelar</li>
					</ul>
				</div>
			)}
		</div>
	);
}
