import { HeaderSmall } from "../components/HeaderSmall";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const MyProfilePage =  () => {
	const { user } = useContext(AuthContext);

	return user ? (
		<section>
			<HeaderSmall />
		</section>
	) : (
		<p></p>
	);
};