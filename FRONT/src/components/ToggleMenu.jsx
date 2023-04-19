import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import adjust from "../../public/images/adjust.svg";

function ToggleMenu() {
  const navigate = useNavigate();
	const { logOut } = useContext(AuthContext);

	const [showMenu, setShowMenu] = useState(false);

	const handleToggle = () => {
		setShowMenu(!showMenu);
	};

  const goAdjusts = () => {
    navigate('/users/login'); //Para que no de error pongo esta ruta
    // navigate('/ajustes');
  };

	return (
		<div className="toggle">
			<button onClick={handleToggle}>
				<img className="h-6" src={adjust} alt="" />
			</button>
			{showMenu && (
				<div className="menu">
					<ul>
						<li onClick={() => logOut()}>Cerrar sesión</li>
						<li onClick={goAdjusts}>Ajustes</li>
						<li onClick={() => setShowMenu(false)}>Cancelar</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default ToggleMenu;
