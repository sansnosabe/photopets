import { Link } from "react-router-dom";

function ErrorMessage({ message }) {
	return (
		<section className="error">
			<h1>Error</h1>
			<p>{message}</p>
			<Link to={"/"}>Go to home</Link>
		</section>
	);
}

export default ErrorMessage;
