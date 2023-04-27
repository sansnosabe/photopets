import { useState, useEffect } from "react";
import { EditProfile } from "../components/EditProfile";

export const EditProfilePage = () => {
	const [update, setUpdate] = useState(false);
	const forceUpdate = () => setUpdate(!update);

	useEffect(() => {}, [update]);

	return (
		<article>
			<EditProfile forceUpdate={forceUpdate} />
		</article>
	);
};
