const getDB = require("../../getDB");

const selectPostsByUserIdQuery = async (idUser) => {
	let connection;

	try {
		connection = await getDB();

		const [rows] = await connection.query(
			`
      SELECT P.id AS post_id, 
      U.username AS owner, 
      P.text, 
      P.image,
			P.created_at,
        COUNT(L.id) AS likes,
        C.id AS comment_id,
        C.comment,
				(SELECT COUNT(id) FROM likes WHERE likes.id_user = ? AND likes.id_post = P.id) AS likedByMe,
        CU.username AS user_name
      FROM posts P
      INNER JOIN users U ON U.id = P.id_user
      LEFT JOIN likes L ON L.id_post = P.id
      LEFT JOIN comments C ON C.id_post = P.id
      LEFT JOIN users CU ON C.id_user = CU.id
      WHERE P.id_user = ?
      GROUP BY P.id, C.id
      ORDER BY P.id DESC, C.id ASC
      `,
			[idUser, idUser]
		);

		const postsMap = new Map();

		for (const row of rows) {
			const { post_id, owner, text, image, created_at, likes, likedByMe } = row;

			let post = postsMap.get(post_id);

			if (!post) {
				post = {
					post_id,
					owner,
					text,
					image,
					created_at,
					likes,
					likedByMe,
					comments_count: 0,
					comments: [],
				};

				postsMap.set(post_id, post);
			}

			if (row.comment_id) {
				post.comments.push({
					id: row.comment_id,
					comment: row.comment,
					user: row.user_name,
				});
				post.comments_count++;
			}
		}

		const posts = Array.from(postsMap.values());

		return posts;
	} finally {
		if (connection) connection.release();
	}
};

module.exports = selectPostsByUserIdQuery;
