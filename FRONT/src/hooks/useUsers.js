import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UpdateMyUserDataService } from "../services";

export const useUsers = () => {
	const { user } = useContext(AuthContext);

	const updateProfile = async (username, kind, breed, aboutMe) => {
		try {
			await UpdateMyUserDataService({ username, kind, breed, about_me: aboutMe });
		} catch (error) {
			console.error("Error al actualizar el perfil:", error);
		}
	};

	const updateAvatar = async (avatar) => {
		try {
			await UpdateMyUserDataService({ avatar });
		} catch (error) {
			console.error("Error al actualizar el perfil:", error);
		}
	};

	return { user, updateProfile, updateAvatar };
};
