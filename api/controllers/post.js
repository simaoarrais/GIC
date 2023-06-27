import { db, ObjectId } from "../db.js";

// ---------------------- CREATE ----------------------
export const addPost = async (req, res) => {
  const post = {
      title: req.body.title,
      content: req.body.content,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      date: req.body.date,
    };
  
  try {
      const collection = db.collection('posts');
      const query = await collection.insertOne(post);
      console.log(`POST - inserted document with _id: ${query.insertedId}`);
      res.status(200); // OK
    } catch (error) {
      console.error("ERROR - creating post:", error);
      res.status(500); // Intertnal Server Error
    };
};
// ----------------------------------------------------

// ----------------------- READ -----------------------
export const getPosts = async (req, res) => {
  try {
      const collection = db.collection('posts');
      const query = await collection.find().toArray();
      console.log(`GET - retrieving all posts`);
      res.status(200).json(query); // OK
    } catch (error) {
      console.error("ERROR - returning posts:", error);
      res.status(500); // Intertnal Server Error
    };
};

export const getSinglePost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Validate postId format
    if (!ObjectId.isValid(postId)) {
      console.log(`ERROR - invalid postId: ${postId}`);
      res.status(400).json({ error: "Invalid postId" }); // Bad Request
      return;
    }

    const collection = db.collection('posts');
    const query = await collection.findOne({ "_id": new ObjectId(postId) });

    if (query) {
      console.log(`GET - retrieving post _id: ${postId}`);
      res.status(200).json(query); // OK, return the post
    } else {
      console.log(`ERROR - post with _id: ${postId} not found`);
      res.status(404).json({ error: "Post not found" }); // Not Found
    }
  } catch (error) {
    console.error("ERROR - returning post:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Internal Server Error
  }
};
// ----------------------------------------------------

// ---------------------- DELETE ----------------------
export const delPost = async (req, res) => {
  try {
    const postId = req.params.id;

    // Validate postId format
    if (!ObjectId.isValid(postId)) {
      console.log(`ERROR - invalid postId: ${postId}`);
      res.status(400).json({ error: "Invalid postId" }); // Bad Request
      return;
    }

    const collection = db.collection('posts');
    const query = await collection.deleteOne({ "_id": new ObjectId(postId) });

    if (query.deletedCount === 1) {
      console.log(`DEL - deleted post _id: ${postId}`);
      res.status(200).json({ message: "Post deleted successfully" }); // OK
    } else {
      console.log(`ERROR - post with _id: ${postId} not found`);
      res.status(404).json({ error: "Post not found" }); // Not Found
    }
  } catch (error) {
    console.error("ERROR - deleting post:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Internal Server Error
  }
};
// ----------------------------------------------------

export const getTest = (req, res) => {
console.log("GET - test");
res.json("It works!");
};
