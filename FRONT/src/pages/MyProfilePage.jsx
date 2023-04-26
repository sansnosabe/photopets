import { useUsers } from "../hooks/useUsers";

export const MyProfilePage =  () => {
	const { user } = useUsers();

	return user ? (
		<section>
			aqui va el perfil del usuario
		</section>
	) : (
		<p></p>
	);
};