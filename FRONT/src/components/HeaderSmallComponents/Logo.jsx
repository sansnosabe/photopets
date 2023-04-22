import logo from "../../../public/images/logo.svg";
import ph from "../../images/ph.svg";

function Logo ({ isSmallScreen }) {
	return (
		<figure>
			<img className={`h-${isSmallScreen ? "10" : "11"} w-full`} src={isSmallScreen ? ph : logo} alt="Logo photopets" />
		</figure>
	);
};

export default Logo;