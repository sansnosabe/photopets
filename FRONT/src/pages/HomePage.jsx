import Auth from "../components/Auth";
import LatestPotsLink from "../components/LatestPotsLink";

export const HomePage = () => {
  return (
    <section>
      <h2 className="font-ubuntu text-center text-black text-2xl mt-5 mb-5"> Regístrate para ver de tus amigos peludos.</h2>
      <Auth />
      <LatestPotsLink />
    </section>
  );
};
