import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UpdateMyUserDataService, deleteUserService } from "../services";

export const useUsers = (forceUpdate) => {
	const { user, updateUser, logOut } = useContext(AuthContext);

	const updateProfile = async (username, kind, breed, aboutMe) => {
		try {
			const updatedUser = await UpdateMyUserDataService({ username, kind, breed, about_me: aboutMe });
			updateUser(updatedUser);
			forceUpdate();
		} catch (error) {
			console.error("Error al actualizar el perfil:", error);
		}
	};

	const updateAvatar = async (avatar) => {
		try {
			const updatedUser = await UpdateMyUserDataService({ avatar });
			updateUser(updatedUser);
			forceUpdate();
		} catch (error) {
			console.error("Error al actualizar el perfil:", error);
		}
	};

	const deleteUser = async () => {
		try {
			await deleteUserService();
			logOut();
		} catch (error) {
			console.error("Error al actualizar el perfil:", error);
		}
	};


	return { user, updateProfile, updateAvatar, deleteUser };
};
