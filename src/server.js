import "./db"; // test 2
import "./models/Article";

import express from "express";
import path from "path";
import routeRouter from "./routeRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "/src/views"));
console.log(process.cwd());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static("assets"));
app.use("/", routeRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});