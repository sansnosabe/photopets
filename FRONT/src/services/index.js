const API_URL = "http://localhost:4000";

export const loginUserService = async (email, password) => {
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

export const createUserService = async (formData) => {
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

export const activateUserService = async (activationCode) => {
	const response = await fetch(`${API_URL}/users/validate/${activationCode}`, {
		method: "PUT",
	});
	const data = await response.json(`${API_URL}/user`);
	return data;
};

export const getMyUserDataService = async ({ token }) => {
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
