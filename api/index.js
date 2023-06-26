import express from "express";
import postRouts from "./routes/posts.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/posts", postRouts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
