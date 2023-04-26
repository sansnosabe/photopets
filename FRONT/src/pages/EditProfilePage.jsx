import { useState, useEffect } from "react";
import { HeaderSmall } from "../components/HeaderSmall";
import { EditProfile } from "../components/EditProfile";

export const EditProfilePage = () => {
  const [update, setUpdate] = useState(false);
  const forceUpdate = () => setUpdate(!update);

	useEffect(() => {
  }, [update]);

  return (
    <article>
      <HeaderSmall forceUpdate={forceUpdate} />
      <EditProfile forceUpdate={forceUpdate} />
    </article>
  );
};
