import { getPostsData } from "../services";
import { useState, useEffect } from "react";

function ImagenPost() {
  // const [postsData, setPostsData] = useState([]);
  const [imageUrl, setImageUrl] = useState("http://localhost:4000/7ddddf2a-4302-41f9-abad-5c1b1e8d819c.jpg");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getPostsData();
  //       setPostsData(data);
	// 			console.log(data.posts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  return (
    <div className="text-lg space-x-1">
      <img src={imageUrl} alt="Imagen cargada desde el backend" />
    </div>
  );
}

export default ImagenPost;