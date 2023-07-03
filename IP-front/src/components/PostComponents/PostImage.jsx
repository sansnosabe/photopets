export function PostImage({ imageURL }) {
	return <img className="object-cover w-full aspect-square" src={`${import.meta.env.VITE_BACKEND}/public/${imageURL}`} />;
}
