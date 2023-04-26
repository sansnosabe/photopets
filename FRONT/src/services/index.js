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

export const UpdateMyUserDataService = async (options) => {
	const formData = new FormData();

	Object.entries(options).forEach(([key, value]) => {
		if (value !== undefined) {
			formData.append(key, value);
		}
	});

	const response = await fetch(`${API_URL}/user/profile`, {
		method: "PUT",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
		body: formData,
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const deleteUserService = async () => {
	const response = await fetch(`${API_URL}/user`, {
		method: "DELETE",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const getPostsDataService = async (token) => {
	const response = await fetch(`${API_URL}/posts`, {
		headers: token ? { 'Authorization': token } : {},
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const searchUsers = async (keyword) => {
	const params = new URLSearchParams();
	params.append("keyword", keyword);

	const response = await fetch(`${API_URL}/postsUsername?${params.toString()}`);

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const deletePostService = async (idPost) => {
	const response = await fetch(`${API_URL}/posts/${idPost}`, {
		method: "DELETE",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const likeDislikePostService = async (idPost, vote) => {
	const response = await fetch(`${API_URL}/posts/${idPost}/likeDislike`, {
		method: "POST",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
		body: JSON.stringify({ vote: vote.toString() }),
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}
	console.log(json);
	return json;
};

export const addComentService = async (idPost, comment) => {
	const response = await fetch(`${API_URL}/posts/comments/${idPost}`, {
		method: "POST",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(comment),
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json;
};

export const deleteCommentService = async (idPost) => {
	const response = await fetch(`${API_URL}/posts/comments/${idPost}`, {
		method: "DELETE",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
		body: JSON.stringify(idPost),
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

export const createPostService = async (post) => {
	const formData = new FormData();
	formData.append("image", post.image);
	formData.append("text", post.text);

	const response = await fetch(`${API_URL}/posts`, {
		method: "POST",
		headers: {
			Authorization: `${localStorage.getItem("token")}`,
		},
		body: formData,
	});

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}

	return json.data;
};

// export const getSinglePostData = async (id) => {
// 	const response = await fetch(`${API_URL}/posts/${id}`);

// 	const json = await response.json();

// 	if (!response.ok) {
// 		throw new Error(json.message);
// 	}

// 	return json.data;
// };

// export const deletePostService = async ({ id, token }) => {
// 	const response = await fetch(`${API_URL}/posts/${id}`, {
// 		method: "DELETE",
// 		headers: {
// 			Authorization: token,
// 		},
// 	});

// 	const json = await response.json();

// 	if (!response.ok) {
// 		throw new Error(json.message);
// 	}
// };
