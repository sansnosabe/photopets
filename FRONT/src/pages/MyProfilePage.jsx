import { HeaderSmall } from "../components/HeaderSmall";
import { useUsers } from "../hooks/useUsers";

export const MyProfilePage =  () => {
	const { user } = useUsers();

	return user ? (
		<section>
			<HeaderSmall />
		</section>
	) : (
		<p></p>
	);
};