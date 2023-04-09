import express from "express";
import "dotenv/config";
import cors from "cors";
import queryParser from "express-query-int";
import fileUpload from "express-fileupload";
import { sequelize } from "./src/database/dbConfig";

const app = express();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos en linea");
  } catch (error) {
    console.warn("Error en la base de datos: ", error);
  }
})();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(queryParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
