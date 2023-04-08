export const Post = ({ post }) => {
    return (
    <article className=" aspect-square bg-white rounded-[20px] shadow-lg shadow-[#83d1ff] p-4 post">
      <img
        className="rounded-[20px] object-cover object-center overflow-hidden"
        src={`http://localhost:3306/uploads/${post.image}`}
        alt={post.image}
      />
      <p className="text-black">{post.owner}</p>
      {post.text ? <p className="text-black max-w-xs mx-auto">{post.text}</p> : null}
      <p className="text-black">{post.likes}</p>
    </article>
  );
};
