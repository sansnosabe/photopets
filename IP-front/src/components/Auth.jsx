import { Link } from "react-router-dom";

export function Auth() {
	return (
		<span className="text-lg space-x-1">
			<Link to="/users/login" className="text-[#65BDF0] hover:underline">
				Entrar
			</Link>
			<span className="text-[#737373]">o</span>
			<Link to="/users/register" className="text-[#65BDF0] hover:underline">
				registrate
			</Link>
		</span>
	);
}
