import { db, ObjectId } from "../db.js";

export const getPosts = async (req, res) => {
  try {
      const collection = db.collection('posts');
      const query = await collection.find().toArray();
      console.log(`Retrieving all posts`);
      res.status(200).json(query); // OK
    } catch (error) {
      console.error("Error returning posts:", error);
      res.status(500); // Intertnal Server Error
    };
};

export const getSinglePost = async (req, res) => {
  try {
      const postId = req.params.id;
      const collection = db.collection('posts');
      const query = await collection.findOne({ "_id": new ObjectId(postId)});
      console.log(query)

      if (query) {
        console.log(`Retrieving post with _id: ${postId}`);
        res.status(200).json(query); // OK, return the post
      } else {
        console.log(`Post with _id: ${postId} not found`);
        res.status(404).json({ error: "Post not found" }); // Not Found
      }

    } catch (error) {
      console.error("Error returning posts:", error);
      res.status(500); // Intertnal Server Error
    };
};

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
        console.log(`Inserted document with _id: ${query.insertedId}`);
        res.status(200); // OK
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500); // Intertnal Server Error
      };
};