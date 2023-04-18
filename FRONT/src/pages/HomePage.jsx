import Header from "../components/Header";
import Auth from "../components/Auth";
import LatestPotsLink from "../components/LatestPotsLink";

export const HomePage = () => {
	return (
		<section>
			<Header />
			<h2 className="text-xl mb-5">
				Regístrate para ver <span className="gradientTitle">fotos</span> de tus amigos peludos.
			</h2>
			<nav>
				<Auth />
			</nav>
			<LatestPotsLink />
		</section>
	);
};
