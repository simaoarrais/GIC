import express from "express";
import postRouts from "./routes/posts.js";

const app = express();
const port = "5000";

app.use(express.json());
app.use("/posts", postRouts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
