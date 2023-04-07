import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
