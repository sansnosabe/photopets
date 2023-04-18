const API_URL = "http://localhost:4000";

export const createUser = async (formData) => {
	const response = await fetch(`${API_URL}/users/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const loginUser = async (email, password) => {
	const response = await fetch(`${API_URL}/users/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const getPostsData = async () => {
	const response = await fetch(`${API_URL}/posts`);

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const getSinglePostData = async (id) => {
	const response = await fetch(`${API_URL}/posts/${id}`);

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const deletePostService = async ({ id, token }) => {
	const response = await fetch(`${API_URL}/posts/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: token,
		},
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}
};

export const getMyDataService = async (token) => {
	const response = await fetch(`${API_URL}/user`, {
		headers: {
			Authorization: token,
		},
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};
