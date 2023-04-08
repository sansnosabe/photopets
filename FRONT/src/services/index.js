export const getPostsData = async () => {
  const response = await fetch(`http://localhost:3306/posts`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  
  return json.data;
};

export const getSinglePostData = async (id) => {
  const response = await fetch(`http://localhost:3306/posts/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deletePostService = async ({ id, token }) => {
  const response = await fetch(`http://localhost:3306/posts/${id}`, {
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
  const response = await fetch(`http://localhost:3306/user`, {
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