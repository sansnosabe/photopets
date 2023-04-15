import Header from "../components/Header";

import { Link } from "react-router-dom";

export const ValidatedPage = () => {
  return (
    <div>
      <Header />
      <p>Email verificado, disfruta de photopets</p>
      <Link to={'/users/login'}>ENTRAR</Link>
    </div>
  );
};