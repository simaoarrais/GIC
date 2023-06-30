import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import {Link} from "react-router-dom";
import "react-quill/dist/quill.snow.css";

const Write = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const API_URL = process.env.REACT_APP_API_ADDRESS || "localhost:5000";

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
      };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
      };

    const uploadPost = async () => {
        const post = {
            title: title,
            content: stripHtmlTags(content),
            category: category,
            imageUrl: imageUrl,
            date: new Date(),
        };

        try {
            console.log(post);
            const response = await axios.post(`http://${API_URL}/posts/addPost`, 
                post,
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.ok) {console.log('Post uploaded successfully');} 
            else {console.error('Error uploading post:', response.data);}

          } catch (error) {
            console.error('Error uploading post', error);
          }
    };


    const handleTest = async ()=>{
        try {
          await axios.get(`http://${API_URL}/posts/test`);
        } catch (err) {
          console.log(err);
        }
    };
    
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={content} onChange={setContent} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input type="text" placeholder="Image URL" value={imageUrl} onChange={handleImageUrlChange} />
                    <div className="buttons">
                        <button onClick={handleTest}>Save as a draft</button>
                        <Link className="link" to="/">
                            <button onClick={uploadPost}>Upload</button>
                        </Link>
                    </div>
                </div>
                <div className="item" onChange={handleCategoryChange}>
                    <h1>Category</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="art" id="art" />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="cinema" id="cinema" />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="design" id="design" />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" id="food" />
                        <label htmlFor="food">Food</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="technology" id="technology" />
                        <label htmlFor="technology">Technology</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
