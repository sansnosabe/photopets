import { Link } from "react-router-dom";
function Auth() {
	return (
    <span className="text-[#D9D9D9] text-2xl">
      <Link to="/login" className="text-[#5DC0F7]">Entrar</Link>o
      <Link to="/registration" className="text-[#5DC0F7]">registrate</Link>
    </span>
  );
}

export default Auth;
