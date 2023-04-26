import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

import adjust from "../images/adjust.svg";

export function ToggleMenu() {
	const { logOut } = useContext(AuthContext);

	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);

	const handleToggle = () => {
		setShowMenu(!showMenu);
	};

	const removeResults = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setShowMenu(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", removeResults);
		return () => {
			document.removeEventListener("click", removeResults);
		};
	}, []);

	return (
		<div className="toggle" ref={menuRef}>
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
