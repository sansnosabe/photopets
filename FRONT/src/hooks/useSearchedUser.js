import { useEffect, useState } from "react";
import { getUserPostsService } from "../services";

export const useSearchedUser = (idUser) => {
	const [searchedUser, setSearchedUser] = useState(null);

	const id = idUser

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const user = await getUserPostsService(id);
				setSearchedUser(user);
			} catch (error) {
				console.error(error);
			}
		};

		if (id) {
			fetchUser();
		} else {
			setSearchedUser(null);
		}
	}, [id]);

	return { searchedUser };
};
