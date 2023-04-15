import { Link } from "react-router-dom";
function Auth() {
	return (
    <span className="text-[#D9D9D9] text-xl">
      <Link to="/users/login" className="text-[#5DC0F7]">Entrar</Link> 
      <span className="mx-2">o</span>
      <Link to="/users" className="text-[#5DC0F7]">registrate</Link>
    </span>
  );
}

export default Auth;
