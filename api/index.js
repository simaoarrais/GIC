import express from "express";

const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
