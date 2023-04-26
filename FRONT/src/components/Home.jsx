import { Header } from "./Header";
import { Auth } from "./Auth";

export function Home() {
	return (
		<section className="h-full flex flex-col justify-center items-center">
			<Header />
			<h2 className="text-xl mb-5">
				Regístrate para ver <span className="gradientTitle">fotos</span> de tus amigos peludos.
			</h2>
			<nav className="flex flex-col justify-center">
				<Auth />
			</nav>
		</section>
	);
}
