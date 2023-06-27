import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// Import Components
import Menu from "../components/Menu";

// Import Media
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";

// Default Variables
const Default = "https://feelforhair.co.uk/wp-content/uploads/2017/12/default-post-thumbnail.png";

const Single = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        // Fetch the posts from the API
        fetch(`http://localhost:5000/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching posts:", error));
    }, [id]);

    const handleDelete = async ()=>{
        try {
          await axios.delete(`http://localhost:5000/posts/delPost/${id}`);
        } catch (err) {
          console.log(err);
        }
    }

    return (
        <div className="single">
            <div className="content">
                <img src={post.imageUrl || Default} alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/1181579/pexels-photo-1181579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>{post.date && post.date.substring(0, 10)} - {post.date && post.date.substring(11, 16)} </p>
                    </div>
                    <div className="edit">
                        <Link to={"/write?edit=2"}>
                            <img src={Edit} alt="" />
                        </Link>
                        <Link className="link" to="/">
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </Link>
                    </div>
                    <div>
                    <p>Category: {post.category || "None"}</p>
                    </div>
                </div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            <Menu />
        </div>
      );
};

export default Single;
