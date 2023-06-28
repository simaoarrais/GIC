import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Default Variables
const Default = "https://feelforhair.co.uk/wp-content/uploads/2017/12/default-post-thumbnail.png";

const Menu = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      // Fetch the posts from the API
      fetch(`http://${process.env.REACT_APP_API_ADDRESS}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

    return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post">
            <img src={post.imageUrl || Default} alt="" />
            <h2>{post.title}</h2>
            <p>Category: {post.category || "None"}</p>
            <Link classname="link" to={`/post/${post._id}`}>
              <button>Read More</button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;