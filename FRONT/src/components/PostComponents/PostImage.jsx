export function PostImage({ imageURL }) {
	const API_URL = "http://localhost:4000";
	return <img className="object-cover w-full aspect-square" src={`${API_URL}/public/${imageURL}`} alt="imagen de post" />;
}
