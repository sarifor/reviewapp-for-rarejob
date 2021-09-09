import "./src/db";
import "./src/models/Article";

import express from "express";
import path from "path";
import routeRouter from "./src/routeRouter";
// import bodyParser from "body-parser";

const app = express();
const PORT = 3000

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "/src/views"));

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.text());

app.use("/static", express.static("src/client"));
app.use("/", routeRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});