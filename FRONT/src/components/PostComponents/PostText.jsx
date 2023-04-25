export function PostText({ text }) {
	const API_URL = "http://localhost:4000";
	return <p className="text-black text-base mb-2">{text}</p>;
}
