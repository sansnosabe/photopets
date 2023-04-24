import logo from "../../../public/images/logo.svg";
import ph from "../../images/ph.svg";

function Logo() {
	return (
		<figure>
			<img className="h-11 logo-large-screen" src={logo} alt="Logo photopets" />
			<img className="h-11 logo-small-screen" src={ph} alt="Logo photopets" />
		</figure>
	);
}

export default Logo;
