import Header from "../components/Header";
import Auth from "../components/Auth";
import LatestPotsLink from "../components/LatestPotsLink";

export const HomePage = () => {
  return (
    <section>
      <Header />
      <h2 className="font-ubuntu text-center text-black text-xl mt-5 mb-5"> Regístrate para ver las <span className="fotos text-blue-500">fotos</span> de tus amigos peludos.</h2>
      <nav>
				<Auth />
			</nav>
      <LatestPotsLink />
    </section>
  );
};
