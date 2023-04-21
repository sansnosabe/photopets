export const PostImage = ({ imageURL }) => {
  const API_URL = "http://localhost:4000";
  return (
    <img className="object-cover w-full h-48" src={`${API_URL}/${imageURL}`} alt="imagen de post" />
  );
};