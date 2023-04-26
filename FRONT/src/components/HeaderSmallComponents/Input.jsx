import { useEffect, useState } from "react";
import { searchUsers } from "../../services";
import { Link } from "react-router-dom";

export function Input() {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		setError("");
		setResults([]);
		const loadResults = async () => {
			try {
				const results = await searchUsers(search);
				setResults(results);
			} catch (error) {
				setError(error.message);
			}
		};

		if (search) {
			loadResults();
		}
	}, [search]);

	const removeResults = () => {
		setError("");
		setResults([]);
	};

	useEffect(() => {
		document.addEventListener("click", removeResults);
		return () => {
			document.removeEventListener("click", removeResults);
		};
	}, []);

	return (
		<div className="relative mx-10">
			<input className="border w-full pl-3 p-1" type="search" placeholder="Buscar" value={search} onInput={(e) => setSearch(e.target.value)} />
			{error ? <p>{error}</p> : null}
			{results.length ? (
				<ul className="absolute w-full bg-white flex flex-col gap-2 p-2 mt-[-1px] z-10">
					{results.map((result) => (
						<li key={result.id}>
							<Link to={`/${result.username}`} className="flex gap-2 items-center">
								<img
									src={`${import.meta.env.VITE_BACKEND}/public/${result.avatar}`}
									alt={result.username}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<p className="text-black">{result.username}</p>
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
